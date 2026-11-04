const form = document.querySelector<HTMLFormElement>('#enquiry-form');
const nameInput = document.querySelector<HTMLInputElement>('#enquiry-name');
const companyInput = document.querySelector<HTMLInputElement>('#enquiry-company');
const interestInput = document.querySelector<HTMLSelectElement>('#enquiry-interest');
const messageInput = document.querySelector<HTMLTextAreaElement>('#enquiry-message');
const preview = document.querySelector<HTMLElement>('#enquiry-preview');
const previewMessage = document.querySelector<HTMLElement>('#enquiry-message-preview');
const continueLink = document.querySelector<HTMLAnchorElement>('#enquiry-continue');

if (form && nameInput && companyInput && interestInput && messageInput && preview && previewMessage && continueLink) {
  const requestedInterest = new URLSearchParams(window.location.search).get('interest');
  if (requestedInterest && Array.from(interestInput.options).some(option => option.value === requestedInterest)) {
    interestInput.value = requestedInterest;
  }

  form.addEventListener('input', () => {
    preview.hidden = true;
    nameInput.setCustomValidity('');
    messageInput.setCustomValidity('');
  });
  form.addEventListener('change', () => { preview.hidden = true; });

  form.addEventListener('submit', event => {
    event.preventDefault();
    nameInput.setCustomValidity(nameInput.value.trim().length < 2 ? 'Please enter your name.' : '');
    messageInput.setCustomValidity(messageInput.value.trim().length < 20 ? 'Please describe your requirement in at least 20 characters.' : '');
    if (!form.reportValidity()) return;

    const message = [
      'Hello Linear Automation,',
      `My name is ${nameInput.value.trim()}.`,
      ...(companyInput.value.trim() ? [`Company: ${companyInput.value.trim()}`] : []),
      `I would like to discuss: ${interestInput.selectedOptions[0]?.text ?? 'a project'}.`,
      '',
      messageInput.value.trim(),
    ].join('\n');
    const whatsapp = new URL(form.dataset.whatsapp ?? 'https://wa.me/923211234446');
    whatsapp.searchParams.set('text', message);
    continueLink.href = whatsapp.href;
    previewMessage.textContent = message;
    preview.hidden = false;
    continueLink.focus({ preventScroll: false });
  });
}
