export const handleDownload=() =>{
  const link = document.createElement('a');
  link.href="/john_resume_N.pdf";
  link.download='John_Muchiri_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}