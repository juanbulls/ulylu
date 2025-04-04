function loggear() {
    // Pedir acceso
    let mail = id('email').value;
    if (mail.indexOf('@bauer.com.co') != -1) mail = mail.replace('@bauer.com.co', '');
    pedirData('acceso', `base=${bdBase}&email=${mail}&pass=${id('pass').value}`).then(r => {
        if (r.error) {
            alert("Combinación correo clave incorrecta")
        } else {
            document.cookie = galleta('token', r.token, 90); // 90 dias, 3 meses +/-
            document.cookie = galleta('user', mail, 90);
            location.reload();
        }
    });
}
function deslogear(){
    document.cookie = `ulyluToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.cookie = `ulyluUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    location.reload();
}

id('pass').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      loggear();
    }
});