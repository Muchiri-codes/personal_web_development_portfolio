interface userForm{
  name:string,
  email: string, 
  subject:string, 
  message: string
}
 export const handleInquirySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);


  const data = Object.fromEntries(formData.entries()) as unknown as userForm;

  console.log("New Potential Client:", data);

  try {
    // This is where you would send the data to a service (like EmailJS or your API)
    // await sendEmail(data); 

    // Trigger the success "Push" message/notification
    if (Notification.permission === "granted") {
      new Notification("Message Sent!", {
        body: `Thanks ${data.name}, I'll get back to you about "${data.subject}" soon.`,
      });
    } else {
      alert("Message delivered!, I will get in touch with you shortly :) ");
    }

    form.reset();
  } catch (error) {
    console.error("Submission failed", error);
    alert("Something went wrong. Please try again.");
  }
};