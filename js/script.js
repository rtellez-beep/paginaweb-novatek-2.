
        // Ejemplo de evento para abrir/cerrar sidebar
        document.querySelector('.navbar-toggler').addEventListener('click', function () {
            document.getElementById('sidebarMenu').classList.toggle('show');
        });

        var textohtml = '';

        $(document).ready(function () {
            alert('Este es un mensaje de inicio que indica que la pagina se ha cargado correctamente!')
        });

        function mostrarTexto(menu){
            console.log('esto es un mensaje informativo en consola. se ve en el navegador!')
            textohtml = '';
            $('#micontenido').html(''); //esto limpia la seccion 
            if(menu =='contacto'){
    textohtml += `
    <div class="card shadow-lg border-0">
        <div class="card-body">
            <h2 class="text-primary text-center mb-4">Contáctanos</h2>

            <div class="row text-center text-md-start">
                
                <div class="col-md-6 mb-3">
                    <p class="fs-5">
                        <i class="fas fa-phone text-primary me-2"></i>
                        <a href="tel:+50587795354" class="text-decoration-none text-dark">
                            8779-5354
                        </a>
                    </p>
                </div>

                <div class="col-md-6 mb-3">
                    <p class="fs-5">
                        <i class="fas fa-envelope text-primary me-2"></i>
                        <a href="mailto:contacto@tueempresa.com" class="text-decoration-none text-dark">
                            contacto@tueempresa.com
                        </a>
                    </p>
                </div>

            </div>

            <hr>

            <h4 class="text-primary">Horarios de atención</h4>
            <p>Lunes a Viernes: 8:00 a.m. – 6:00 p.m.</p>
            <p>Sábados: 9:00 a.m. – 1:00 p.m.</p>

            <hr>

            <h4 class="text-primary">Nuestros servicios</h4>
            <ul>
                <li>Soporte técnico</li>
                <li>Desarrollo de software y páginas web</li>
                <li>Mantenimiento y reparación de equipos</li>
                <li>Servicios de seguridad informática</li>
            </ul>

            <div class="text-center mt-4">
                <a href="https://wa.me/50587795354" target="_blank" class="btn btn-success">
                    <i class="fab fa-whatsapp"></i> Escríbenos por WhatsApp
                </a>
            </div>
        </div>
    </div>
    `;
            }

            
            if(menu =='servicio'){
                textohtml += "<h1> Nuestros servicios son </p>";
                textohtml += "<h1>Ofrecemos soluciones confiables para el cuidado y optimización de tus sistemas digitales:"
                textohtml += "<h1>Recuperación de Software Restauramos sistemas y programas dañados, recuperando su funcionamiento de forma rápida y segura."
                textohtml += "<h1>Instalación de Antivirus Protegemos tus equipos mediante la instalación y configuración de antivirus actualizados contra todo tipo de amenazas." 
                textohtml += "<h1>Mantenimiento de Páginas Web Optimizamos, actualizamos y aseguramos tu sitio web para un rendimiento eficiente y continuo."
                }
            if(menu =='nosotros'){
                textohtml += "<h1> Mision </h1>";
                textohtml += "<h1>nuestra mision es Brindar soluciones tecnológicas integrales a través del mantenimiento de software, reparación de equipos, desarrollo de sistemas y páginas web, así como la protección informática mediante servicios de antivirus, garantizando calidad, eficiencia y seguridad para optimizar el rendimiento y crecimiento de nuestros clientes.</h1>";         
            
                textohtml += "<h1> Vision </h1>";
                textohtml += "<h1>nuestra vision es Convertirnos en la empresa tecnológica más influyente de Nicaragua y una de las principales en Centroamérica, liderando la transformación digital con soluciones innovadoras, seguras y de clase mundial. Buscamos trascender fronteras, posicionando el talento nicaragüense en el ámbito internacional y siendo un motor clave para el desarrollo tecnológico, económico y social del país, impulsando a nuestros clientes a competir y crecer en la economía global."            }
            $('#micontenido').html(textohtml);

             // OPCION A
    if(menu =='opcionA'){
        textohtml += "<h1>Opción A</h1>";

        textohtml += "<h3>Servicios de mantenimiento</h3>";

        textohtml += "<h1>En Novatek brindamos mantenimiento preventivo y correctivo para computadoras, laptops e impresoras.</h1>";

        textohtml += "<ul>";
        textohtml += "<li>Limpieza de hardware</li>";
        textohtml += "<li>Instalación de programas</li>";
        textohtml += "<li>Optimización del sistema</li>";
        textohtml += "</ul>";
        textohtml += "<h4>Contacto</h4>";

    textohtml += "<p>";
    textohtml += "📞 WhatsApp: ";
    
    textohtml += "<a href='https://wa.me/50585176313' target='_blank' class='btn btn-success'>";
    textohtml += "Escribir por WhatsApp";
    textohtml += "</a>";

    textohtml += "</p>";
       
    }

    // OPCION B
    if(menu =='opcionB'){
        textohtml += "<h1>Opción B</h1>";

        textohtml += "<h3>Desarrollo de sistemas</h3>";

        textohtml += "<h1>Desarrollamos páginas web y sistemas administrativos modernos.</p>";

        textohtml += "<div class='alert alert-info'>";
        textohtml += "Trabajamos con tecnologías modernas y soporte profesional.";
        textohtml += "</div>";
         textohtml += "<h4>Contacto</h4>";

    textohtml += "<p>";
    textohtml += "📞 WhatsApp: ";
    
    textohtml += "<a href='https://wa.me/50581027352' target='_blank' class='btn btn-success'>";
    textohtml += "Escribir por WhatsApp";
    textohtml += "</a>";

    textohtml += "</p>";
       
    }

    $('#micontenido').html(textohtml);


}
function login(){
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    if(user==="Roger tellez" && pass==="r.tellez@"){
        document.getElementById("loginPage").style.display="none";
        document.getElementById("mainPage").style.display="block";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}

            
            