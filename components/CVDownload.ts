export const handleDownload=() =>{
  const link = document.createElement('a');
  link.href="/Muchiri_Codes_CV.pdf";
  link.download='John_Muchiri_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}