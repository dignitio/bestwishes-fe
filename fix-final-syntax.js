const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax issues
function fixFinalSyntax(content) {
  let fixedContent = content;
  
  // Fix motion component syntax - most critical
  fixedContent = fixedContent.replace(/whileTap=\{\s*scale:\s*([^}]+)\s*\}/g, 'whileTap={{ scale: $1 }}');
  fixedContent = fixedContent.replace(/whileHover=\{\s*scale:\s*([^}]+)\s*\}/g, 'whileHover={{ scale: $1 }}');
  
  // Fix style attributes with missing braces
  fixedContent = fixedContent.replace(/style=\{([^}]+)\}/g, 'style={{$1}}');
  
  // Fix initialValues with missing braces
  fixedContent = fixedContent.replace(/initialValues=\{([^}]+)\}/g, 'initialValues={{$1}}');
  
  // Fix specific problematic patterns
  fixedContent = fixedContent.replace(/style=\{background:\s*([^,]+),\s*backgroundSize:\s*'([^']+)',\s*backgroundPosition:\s*'([^']+)'\}/g, 'style={{background: $1, backgroundSize: \'$2\', backgroundPosition: \'$3\'}}');
  fixedContent = fixedContent.replace(/style=\{backgroundColor:\s*([^}]+)\}/g, 'style={{backgroundColor: $1}}');
  fixedContent = fixedContent.replace(/style=\{color:\s*([^}]+)\}/g, 'style={{color: $1}}');
  fixedContent = fixedContent.replace(/style=\{borderBottom:\s*([^}]+)\}/g, 'style={{borderBottom: $1}}');
  fixedContent = fixedContent.replace(/style=\{zIndex:\s*([^}]+)\}/g, 'style={{zIndex: $1}}');
  
  return fixedContent;
}

// Function to find all .tsx files
function findTSXFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', 'build', '.git'].includes(file)) {
        findTSXFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✓ Fixed: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return true;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main fixing process
console.log('🔧 Final syntax fixing...\n');

const srcDir = path.join(__dirname, 'src');
const tsxFiles = findTSXFiles(srcDir);

console.log(`📁 Found ${tsxFiles.length} TypeScript files to check\n`);

let successCount = 0;
let errorCount = 0;

tsxFiles.forEach(filePath => {
  if (fixFile(filePath)) {
    successCount++;
  } else {
    errorCount++;
  }
});

console.log(`\n🎉 Final syntax fixing complete!`);
console.log(`✅ Successfully processed: ${successCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
