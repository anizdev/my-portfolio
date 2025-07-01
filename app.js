 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
 }


 const botToken ="8070632011:AAHn9tvjS4v_zvCCWj7fcGi-C_IsuA7J-14";
 const chatId = 6514992546;




document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  console.log(data);
  
  const text = Array.from(data.entries())
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=Anis`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Xatolik yuz berdi');
      alert('Xabar yuborildi!');
      form.reset();
    })
    .catch(err => {
      console.error(error);
      alert('Yuborishda xatolik.');
    });
});

