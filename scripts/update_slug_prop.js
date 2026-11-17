import fs from 'fs';

let s = fs.readFileSync('scripts/generate_all_complete.js', 'utf-8');
s = s.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'guangsu\')!" />', '<BrandCard slug="guangsu" />');
s = s.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'muguang\')!" />', '<BrandCard slug="muguang" />');
s = s.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'feimao\')!" />', '<BrandCard slug="feimao" />');
s = s.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'xingdaomeng\')!" />', '<BrandCard slug="xingdaomeng" />');
s = s.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'ermao\')!" />', '<BrandCard slug="ermao" />');
s = s.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'weitu\')!" />', '<BrandCard slug="weitu" />');

// also replace in index.md if any
let indexContent = fs.readFileSync('docs/index.md', 'utf-8');
indexContent = indexContent.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'guangsu\')!" />', '<BrandCard slug="guangsu" />');
indexContent = indexContent.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'muguang\')!" />', '<BrandCard slug="muguang" />');
indexContent = indexContent.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'feimao\')!" />', '<BrandCard slug="feimao" />');
indexContent = indexContent.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'xingdaomeng\')!" />', '<BrandCard slug="xingdaomeng" />');
indexContent = indexContent.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'ermao\')!" />', '<BrandCard slug="ermao" />');
indexContent = indexContent.replaceAll('<BrandCard :brand="brands.find(b => b.slug === \'weitu\')!" />', '<BrandCard slug="weitu" />');
fs.writeFileSync('docs/index.md', indexContent, 'utf-8');

fs.writeFileSync('scripts/generate_all_complete.js', s, 'utf-8');
console.log('Replaced all BrandCard expressions successfully.');
