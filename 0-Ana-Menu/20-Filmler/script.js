const whatsAppStatus = $('.whatsapp__status');

const checkWhatsAppStatus = () => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  if (hour > 10 && hour < 19 && day != 0) {
    whatsAppStatus.removeClass('whatsapp__status--offline').addClass('whatsapp__status--online');
  } else {
    whatsAppStatus.removeClass('whatsapp__status--online').addClass('whatsapp__status--');
  }
  setTimeout(checkWhatsAppStatus, 15000);
};

checkWhatsAppStatus();