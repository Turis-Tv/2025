const whatsAppStatus = $('.whatsapp__status');

const checkWhatsAppStatus = () => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  if (hour > 08 && hour < 23 && day != 0) {
    whatsAppStatus.removeClass('whatsapp__status--offline').addClass('whatsapp__status--online');
  } else {
    whatsAppStatus.removeClass('whatsapp__status--online').addClass('whatsapp__status--offline');
  }
  setTimeout(checkWhatsAppStatus, 15000);
};

checkWhatsAppStatus();