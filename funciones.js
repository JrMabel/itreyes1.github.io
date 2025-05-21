//  <!-- JavaScript para cambiar idioma -->
const translations = {
    es: {
        "home": "Inicio",
        "about": "Quiénes Somos",
        "services": "Servicios",
        "contact": "Contacto",
        "hero-title": "Soluciones Web Profesionales en Suiza",
        "hero-description": "Diseño, desarrollo y administración de páginas web a medida para personas y negocios. Transformo tus ideas en realidad digital.",
        "request-service": "Solicitar Servicio",
        "view-services": "Ver Servicios",
        "services-section-title": "Mis Servicios",
        "web-design": "Diseño Web",
        "web-design-description": "Creo diseños atractivos y funcionales que reflejan la identidad de tu marca y mejoran la experiencia del usuario.",
        "more-info": "Más información",
        "testimonials-section-title": "Clientes Satisfechos",
        "cta-title": "¿Listo para llevar tu presencia web al siguiente nivel?",
        "cta-description": "Contáctame hoy mismo para discutir tu proyecto y recibir una cotización personalizada.",
        "cta-contact": "Contáctame",
        "web-development": "Desarrollo Web",
        "web-development-description": "Desarrollo sitios web rápidos, seguros y optimizados para todos los dispositivos y motores de búsqueda.",
        "web-administration": "Administración Web",
        "web-administration-description": "Mantenimiento, actualizaciones y soporte técnico para garantizar que tu sitio web funcione perfectamente.",
        "more-info-services": "Detalles de Servicios",
        "customer-comment1": "Excelente trabajo y atención personalizada. Mi sitio web ha aumentado significativamente las consultas de clientes.",
        "customer-detail1": "Dueña de JimCas Consultores, Basel",
        "customer-comment2": "Rápido, profesional y con un excelente entendimiento de lo que necesitábamos para nuestro negocio.",
        "customer-detail2": "Restaurante, Geneva",
        "customer-comment3": "El sitio web que creó para mi consultoría ha sido fundamental para establecer mi presencia profesional.",
        "customer-detail3": "Consultora, Lausanne",
        "about-me": "Sobre Mí",
        "about-me-shortly": "Freelancer profesional especializado en diseño, desarrollo y administración de sitios web para clientes en Suiza.",
        "my-local-address": "Basilea, Suiza",
        "my-copyright": "© Reyes Castellanos. Todos los derechos reservados.",
        "my-privacy-policy": "Política de Privacidad",
        "service-terms": "Términos de Servicio",
        "call-me":"Llame Ahora",
        "call-out-desktop": "En desktop, los botones de contacto abrirán tu aplicación predeterminada"
    },
    en: {
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "contact": "Contact",
        "hero-title": "Professional Web Solutions in Switzerland",
        "hero-description": "Design, development, and management of custom websites for individuals and businesses. I turn your ideas into digital reality.",
        "request-service": "Request Service",
        "view-services": "View Services",
        "services-section-title": "My Services",
        "web-design": "Web Design",
        "web-design-description": "I create attractive and functional designs that reflect your brand identity and improve user experience.",
        "more-info": "More info",
        "testimonials-section-title": "Satisfied Clients",
        "cta-title": "Ready to take your online presence to the next level?",
        "cta-description": "Contact me today to discuss your project and receive a personalized quote.",
        "cta-contact": "Contact me",
        "web-development": "Web Development",
        "web-development-description": "I develop fast, secure, and optimized websites for all devices and search engines.",
        "web-administration": "Web Administration",
        "web-administration-description": "Maintenance, updates, and technical support to ensure your website runs smoothly.",
        "more-info-services": "Service Details",
        "customer-comment1": "Excellent work and personalized service. My website has significantly increased customer inquiries.",
        "customer-detail1": "Owner of JimCas Consultants, Basel",
        "customer-comment2": "Fast, professional, and with an excellent understanding of what we needed for our business.",
        "customer-detail2": "Restaurant, Geneva",
        "customer-comment3": "The website you created for my consulting practice has been instrumental in establishing my professional presence.",
        "customer-detail3": "Consultant, Lausanne",
        "about-me": "About Me",
        "about-me-shortly": "Professional freelancer specialized in web design, development and administration for clients in Switzerland.",
        "my-local-address": "Basel, Switzerland",
        "my-copyright": "© 2025 Reyes Castellanos. All rights reserved.",
        "my-privacy-policy": "Privacy Policy",
        "service-terms": "Terms of Service",
        "call-me":"Call Now",
        "call-out-desktop": "On desktop, the contact buttons will open your default app"
    },
    de: {
        "home": "Startseite",
        "about": "Über uns",
        "services": "Dienstleistungen",
        "contact": "Kontakt",
        "hero-title": "Professionelle Web-Lösungen in der Schweiz",
        "hero-description": "Design, Entwicklung und Verwaltung von maßgeschneiderten Websites für Privatpersonen und Unternehmen. Ich verwandle Ihre Ideen in digitale Realität.",
        "request-service": "Service anfordern",
        "view-services": "Dienstleistungen ansehen",
        "services-section-title": "Meine Dienstleistungen",
        "web-design": "Webdesign",
        "web-design-description": "Ich erstelle ansprechende und funktionale Designs, die Ihre Markenidentität widerspiegeln und die Benutzererfahrung verbessern.",
        "more-info": "Mehr Informationen",
        "testimonials-section-title": "Zufriedene Kunden",
        "cta-title": "Bereit, Ihre Online-Präsenz auf die nächste Stufe zu heben?",
        "cta-description": "Kontaktieren Sie mich noch heute, um Ihr Projekt zu besprechen und ein persönliches Angebot zu erhalten.",
        "cta-contact": "Kontaktieren Sie mich",
        "web-development": "Webentwicklung",
        "web-development-description": "Ich entwickle schnelle, sichere und optimierte Websites für alle Geräte und Suchmaschinen.",
        "web-administration": "Web-Verwaltung",
        "web-administration-description": "Wartung, Updates und technischer Support, um sicherzustellen, dass Ihre Website reibungslos läuft.",
        "more-info-services": "Dienstleistungsdetails",
        "customer-comment1": "Hervorragende Arbeit und persönlicher Service. Meine Website hat die Kundenanfragen deutlich erhöht.",
        "customer-detail1": "Inhaber von JimCas Consultants, Basel",
        "customer-comment2": "Schnell, professionell und mit einem ausgezeichneten Verständnis für unsere Geschäftsanforderungen.",
        "customer-detail2": "Restaurant, Genf",
        "customer-comment3": "Die von Ihnen erstellte Website für meine Beratungstätigkeit war entscheidend für die Etablierung meiner professionellen Präsenz.",
        "customer-detail3": "Beraterin, Lausanne",
        "about-me": "Über mich",
        "about-me-shortly": "Professioneller Freelancer, spezialisiert auf Webdesign, Entwicklung und Verwaltung für Kunden in der Schweiz.",
        "my-local-address": "Basel, Schweiz",
        "my-copyright": "© Reyes Castellanos. Alle Rechte vorbehalten.",
        "my-privacy-policy": "Datenschutzrichtlinie",
        "service-terms": "Nutzungsbedingungen",
        "call-me":"Jetzt Anrufen",
        "call-out-desktop": "Auf dem Desktop öffnen die Kontaktschaltflächen Ihre Standard-App"

    },
    fr: {
        "home": "Accueil",
        "about": "À propos",
        "services": "Services",
        "contact": "Contact",
        "hero-title": "Solutions Web Professionnelles en Suisse",
        "hero-description": "Conception, développement et gestion de sites web personnalisés pour particuliers et entreprises. Je transforme vos idées en réalité numérique.",
        "request-service": "Demander un Service",
        "view-services": "Voir les Services",
        "services-section-title": "Mes Services",
        "web-design": "Design Web",
        "web-design-description": "Je crée des designs attrayants et fonctionnels qui reflètent l'identité de votre marque et améliorent l'expérience utilisateur.",
        "more-info": "Plus d'informations",
        "testimonials-section-title": "Clients Satisfaits",
        "cta-title": "Prêt à faire passer votre présence en ligne au niveau supérieur?",
        "cta-description": "Contactez-moi dès aujourd'hui pour discuter de votre projet et recevoir un devis personnalisé.",
        "cta-contact": "Contactez-moi",
        "web-development": "Développement Web",
        "web-development-description": "Je développe des sites web rapides, sécurisés et optimisés pour tous les appareils et moteurs de recherche.",
        "web-administration": "Administration Web",
        "web-administration-description": "Maintenance, mises à jour et support technique pour garantir le bon fonctionnement de votre site web.",
        "more-info-services": "Détails des Services",
        "customer-comment1": "Travail excellent et service personnalisé. Mon site web a considérablement augmenté les demandes de clients.",
        "customer-detail1": "Propriétaire de JimCas Consultants, Bâle",
        "customer-comment2": "Rapide, professionnel et avec une excellente compréhension de nos besoins commerciaux.",
        "customer-detail2": "Restaurant, Genève",
        "customer-comment3": "Le site web que vous avez créé pour mon activité de conseil a été essentiel pour établir ma présence professionnelle.",
        "customer-detail3": "Consultante, Lausanne",
        "about-me": "À propos de moi",
        "about-me-shortly": "Freelance professionnel spécialisé dans la conception, le développement et l'administration de sites web pour des clients en Suisse.",
        "my-local-address": "Bâle, Suisse",
        "my-copyright": "© Reyes Castellanos. Tous droits réservés.",
        "my-privacy-policy": "Politique de Confidentialité",
        "service-terms": "Conditions de Service",
        "call-me":"Appelez Maintenant",
        "call-out-desktop": "Sur le bureau, les boutons de contact ouvriront votre application par défaut"
    },
    it: {
        "home": "Home",
        "about": "Chi siamo",
        "services": "Servizi",
        "contact": "Contatto",
        "hero-title": "Soluzioni Web Professionali in Svizzera",
        "hero-description": "Progettazione, sviluppo e gestione di siti web personalizzati per privati e aziende. Trasformo le tue idee in realtà digitale.",
        "request-service": "Richiedi Servizio",
        "view-services": "Visualizza Servizi",
        "services-section-title": "I miei Servizi",
        "web-design": "Web Design",
        "web-design-description": "Creo design accattivanti e funzionali che riflettono l'identità del tuo brand e migliorano l'esperienza utente.",
        "more-info": "Maggiori informazioni",
        "testimonials-section-title": "Clienti Soddisfatti",
        "cta-title": "Pronto a portare la tua presenza online al livello successivo?",
        "cta-description": "Contattami oggi stesso per discutere del tuo progetto e ricevere un preventivo personalizzato.",
        "cta-contact": "Contattami",
        "web-development": "Sviluppo Web",
        "web-development-description": "Sviluppo siti web veloci, sicuri e ottimizzati per tutti i dispositivi e motori di ricerca.",
        "web-administration": "Amministrazione Web",
        "web-administration-description": "Manutenzione, aggiornamenti e supporto tecnico per garantire il perfetto funzionamento del tuo sito web.",
        "more-info-services": "Dettagli Servizi",
        "customer-comment1": "Lavoro eccellente e servizio personalizzato. Il mio sito web ha aumentato significativamente le richieste dei clienti.",
        "customer-detail1": "Proprietario di JimCas Consultants, Basilea",
        "customer-comment2": "Veloce, professionale e con un'ottima comprensione di ciò di cui avevamo bisogno per la nostra attività.",
        "customer-detail2": "Ristorante, Ginevra",
        "customer-comment3": "Il sito web che hai creato per la mia attività di consulenza è stato fondamentale per stabilire la mia presenza professionale.",
        "customer-detail3": "Consulente, Losanna",
        "about-me": "Su di me",
        "about-me-shortly": "Freelance professionista specializzato in progettazione, sviluppo e amministrazione di siti web per clienti in Svizzera.",
        "my-local-address": "Basilea, Svizzera",
        "my-copyright": "© Reyes Castellanos. Tutti i diritti riservati.",
        "my-privacy-policy": "Privacy Policy",
        "service-terms": "Termini di Servizio",
        "call-me":"Chiama Ora",
        "call-out-desktop": "Sul desktop, i pulsanti dei contatti apriranno l'app predefinita"
    }
};

// Actualizar bandera visible
function updateFlag() {
    const selector = document.getElementById('language-selector');
    const flag = document.getElementById('current-language-flag');
    const selectedOption = selector.options[selector.selectedIndex];
    flag.src = selectedOption.getAttribute('data-icon');
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    updateFlag();
    document.getElementById('language-selector').addEventListener('change', updateFlag);
});


function changeLanguage() {
    const language = document.getElementById("language-selector").value;
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(function(element) {
        const key = element.getAttribute("data-key");
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    updateFlag(); // Actualizar la bandera visible
}

//  <!-- AQUI INICIA EL CHATBOT -->

  // Datos del chatbot mejorados
        const chatbotData = {
            greetings: ["hola", "hi", "buenos días", "buenas tardes", "buenas noches", "saludos"],
            farewells: ["adiós", "chao", "hasta luego", "nos vemos", "bye", "hasta pronto"],
            services: {
                "Diseño web": {
                    icon: "fas fa-paint-brush",
                    description: "Creación de diseños web modernos, responsive y centrados en el usuario que mejoran la experiencia digital de tus clientes.",
                    price: "Desde $400 (sitios básicos) hasta $2,500+ (diseños personalizados complejos)"
                },
                "Desarrollo web": {
                    icon: "fas fa-code",
                    description: "Desarrollo de sitios web completos con las últimas tecnologías (HTML, CSS, JavaScript, Bootstrap, Node.js) para un rendimiento óptimo.",
                    price: "Desde $600 (landing pages) hasta $5,000+ (aplicaciones web complejas)"
                },
                "Administración web": {
                    icon: "fas fa-server",
                    description: "Mantenimiento continuo, actualizaciones de seguridad, backups y optimización de rendimiento para tu sitio web existente.",
                    price: "Planes mensuales desde $100 (básico) hasta $500+ (avanzado)"
                },
                "Aplicaciones de escritorio": {
                    icon: "fas fa-desktop",
                    description: "Desarrollo de software personalizado para Windows, macOS y Linux con tecnologías como .NET o Java.",
                    price: "Desde $1,200 (aplicaciones simples) hasta $10,000+ (software empresarial)"
                },
                "Aplicaciones móviles": {
                    icon: "fas fa-mobile-alt",
                    description: "Creación de apps nativas (Swift, Kotlin) o multiplataforma (Flutter, React Native) para iOS y Android.",
                    price: "Desde $1,500 (apps básicas) hasta $25,000+ (aplicaciones empresariales)"
                },
                "Integraciones & Salesforce CPQ": {
                    icon: "fas fa-random",
                    description: "Soluciones personalizadas para integrar Salesforce CPQ con tus sistemas existentes y automatizar procesos de cotización.",
                    price: "Proyectos personalizados con evaluación previa (generalmente $5,000+)"
                },
                "Otros servicios": {
                    icon: "fas fa-lightbulb",
                    description: "Desarrollo de soluciones tecnológicas a medida para necesidades específicas de tu negocio.",
                    price: "Cotización personalizada según requerimientos"
                }
            },
            defaultResponses: [
                "No estoy seguro de entenderte completamente. ¿Podrías reformular tu pregunta?",
                "Esa consulta es un poco específica para mis capacidades actuales. ¿Te gustaría que te conecte con un experto humano?",
                "Voy aprendiendo cada día, pero aún no tengo información sobre ese tema en particular."
            ],
            contactPrompt: "Parece que necesitas información más detallada. ¿Quieres que te lleve directamente a nuestro formulario de contacto para que un experto te ayude?"
        };

        // Elementos del DOM
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotContainer = document.getElementById('chatbot-container');
        const chatbotClose = document.querySelector('.chatbot-close');
        const chatbotMessages = document.getElementById('chatbot-messages');
        const chatbotUserInput = document.getElementById('chatbot-user-input');
        const chatbotSend = document.getElementById('chatbot-send');
        const notificationBadge = document.getElementById('chatbot-notification');

        // Estado del chatbot
        let isFirstInteraction = true;
        let isTyping = false;

        // Mostrar/ocultar chatbot
        chatbotToggle.addEventListener('click', () => {
            chatbotContainer.classList.add('open');
            chatbotToggle.style.display = 'none';
            notificationBadge.style.display = 'none';
            
            if (isFirstInteraction) {
                showWelcomeMessage();
                isFirstInteraction = false;
            }
        });

        chatbotClose.addEventListener('click', () => {
            chatbotContainer.classList.remove('open');
            chatbotToggle.style.display = 'flex';
        });

        // Enviar mensaje al presionar Enter o el botón
        chatbotUserInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        chatbotSend.addEventListener('click', sendMessage);

        // Mostrar mensaje de bienvenida
        function showWelcomeMessage() {
            const welcomeMessages = [
                "¡Hola! 👋 Soy IT Reyes, tu asistente virtual.",
                "Estoy aquí para ayudarte a conocer nuestros servicios y responder tus preguntas.",
                "¿En qué puedo ayudarte hoy?"
            ];
            
            // Mostrar mensajes con retraso para simular conversación
            welcomeMessages.forEach((msg, i) => {
                setTimeout(() => {
                    addBotMessage(msg);
                    if (i === welcomeMessages.length - 1) {
                        showQuickOptions();
                    }
                }, i * 800);
            });
        }

        // Función para enviar mensaje
        function sendMessage() {
            const message = chatbotUserInput.value.trim();
            if (message === '' || isTyping) return;
            
            addUserMessage(message);
            chatbotUserInput.value = '';
            
            // Mostrar indicador de "escribiendo"
            showTypingIndicator();
            
            // Procesar después de un pequeño retraso
            setTimeout(() => {
                processUserMessage(message);
                hideTypingIndicator();
            }, 1000 + Math.random() * 1000);
        }

        // Mostrar indicador de que el bot está escribiendo
        function showTypingIndicator() {
            isTyping = true;
            const typingElement = document.createElement('div');
            typingElement.classList.add('typing-indicator');
            typingElement.id = 'typing-indicator';
            typingElement.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            chatbotMessages.appendChild(typingElement);
            scrollToBottom();
        }

        // Ocultar indicador de escritura
        function hideTypingIndicator() {
            isTyping = false;
            const typingElement = document.getElementById('typing-indicator');
            if (typingElement) {
                typingElement.remove();
            }
        }

        // Función para agregar mensaje del usuario
        function addUserMessage(text) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user-message');
            messageElement.textContent = text;
            chatbotMessages.appendChild(messageElement);
            scrollToBottom();
        }

        // Función para agregar mensaje del bot
        function addBotMessage(text, isHTML = false) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'bot-message');
            
            if (isHTML) {
                messageElement.innerHTML = text;
            } else {
                messageElement.textContent = text;
            }
            
            chatbotMessages.appendChild(messageElement);
            scrollToBottom();
        }

        // Mostrar opciones rápidas
        function showQuickOptions() {
            const services = Object.keys(chatbotData.services);
            const html = `
                <p>Puedes preguntar por alguno de nuestros servicios principales:</p>
                <div class="quick-options">
                    ${services.map(service => 
                        `<button class="quick-option" onclick="handleQuickOption('${service}')">
                            <i class="${chatbotData.services[service].icon}"></i> ${service}
                        </button>`
                    ).join('')}
                </div>
                <p>O escribe tu consulta directamente y te ayudaré.</p>
            `;
            addBotMessage(html, true);
        }

        // Manejar selección de opción rápida
        window.handleQuickOption = function(service) {
            addUserMessage(`Me interesa saber sobre ${service}`);
            processServiceQuery(service);
        }

        // Procesar mensaje del usuario
        function processUserMessage(message) {
            const lowerMessage = message.toLowerCase();
            
            // Verificar saludos
            if (chatbotData.greetings.some(g => lowerMessage.includes(g))) {
                const greetings = [
                    "¡Hola de nuevo! 😊",
                    "¿Qué más te gustaría saber?",
                    "Estoy aquí para ayudarte. ¿En qué necesitas información?"
                ];
                greetings.forEach((msg, i) => {
                    setTimeout(() => addBotMessage(msg), i * 600);
                });
                return;
            }
            
            // Verificar despedidas
            if (chatbotData.farewells.some(f => lowerMessage.includes(f))) {
                const farewells = [
                    "¡Ha sido un gusto ayudarte!",
                    "Si tienes más preguntas, estaré aquí. 👋",
                    "¡Hasta pronto! Que tengas un excelente día."
                ];
                farewells.forEach((msg, i) => {
                    setTimeout(() => addBotMessage(msg), i * 600);
                });
                return;
            }
            
            // Verificar si pregunta por servicios
            const serviceKeys = Object.keys(chatbotData.services);
            const matchedService = serviceKeys.find(service => 
                lowerMessage.includes(service)
            );
            
            if (matchedService) {
                processServiceQuery(matchedService);
            } else if (lowerMessage.includes('servicio') || lowerMessage.includes('servicios')) {
                addBotMessage("Tenemos una variedad de servicios tecnológicos para ofrecerte:");
                showQuickOptions();
            } else if (lowerMessage.includes('precio') || lowerMessage.includes('cuesta') || lowerMessage.includes('coste') || lowerMessage.includes('valor')) {
                addBotMessage("Los precios varían según la complejidad del proyecto. ¿Sobre qué servicio te gustaría conocer los costos?");
                showQuickOptions();
            } else if (lowerMessage.includes('contacto') || lowerMessage.includes('hablar') || lowerMessage.includes('humano')) {
                showContactOption();
            } else {
                // Respuesta por defecto + opción de contacto
                const randomResponse = chatbotData.defaultResponses[
                    Math.floor(Math.random() * chatbotData.defaultResponses.length)
                ];
                
                setTimeout(() => {
                    addBotMessage(randomResponse);
                    setTimeout(showContactOption, 800);
                }, 800);
            }
        }

        // Mostrar opción de contacto
        function showContactOption() {
            const html = `
                <p>${chatbotData.contactPrompt}</p>
                <a href="contact.html" class="form-button">
                    <i class="fas fa-paper-plane"></i> Ir al formulario
                </a>
            `;
            addBotMessage(html, true);
        }

        // Procesar consulta sobre un servicio específico
        function processServiceQuery(service) {
            const serviceData = chatbotData.services[service];
            const html = `
                <div class="service-card">
                    <div class="service-title">
                        <i class="${serviceData.icon}"></i>
                        <span>${service.charAt(0).toUpperCase() + service.slice(1)}</span>
                    </div>
                    <p>${serviceData.description}</p>
                    <div class="service-price">
                        <i class="fas fa-tag"></i> ${serviceData.price}
                    </div>
                </div>
                <a href="contact.html" class="form-button">
                    <i class="fas fa-envelope"></i> Solicitar cotización
                </a>
            `;
            
            // Pequeño retraso para hacerlo más natural
            setTimeout(() => {
                addBotMessage(`Aquí tienes información sobre <strong>${service}</strong>:`, true);
                setTimeout(() => addBotMessage(html, true), 600);
            }, 800);
        }

        // Función para hacer scroll al final del chat
        function scrollToBottom() {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        // Mostrar notificación cuando el chat está cerrado
        function showNotification() {
            if (!chatbotContainer.classList.contains('open')) {
                notificationBadge.style.display = 'flex';
            }
        }

        // Simular mensaje inicial después de 8 segundos si no hay interacción
        setTimeout(() => {
            if (isFirstInteraction) {
                showNotification();
            }
        }, 8000);


        //  <!-- COMPORTAMIENTO DEL MENU HAMBURGUESA -ABRIR Y CERRAR- -->

        document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.custom-toggler');
    const navbarCollapse = document.getElementById('navbarNav');
    
    if (navbarToggler && navbarCollapse) {
        // Inicializar el menú colapsable de Bootstrap
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        
        // Manejar clic en el toggler
        navbarToggler.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Cerrar el menú si está abierto
                bsCollapse.hide();
            } else {
                // Abrir el menú si está cerrado
                bsCollapse.show();
            }
        });
        
        // Actualizar estado cuando Bootstrap complete la animación
        navbarCollapse.addEventListener('shown.bs.collapse', function() {
            navbarToggler.setAttribute('aria-expanded', 'true');
        });
        
        navbarCollapse.addEventListener('hidden.bs.collapse', function() {
            navbarToggler.setAttribute('aria-expanded', 'false');
        });
        
        // Cerrar menú al hacer clic en enlaces (opcional para móviles)
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    bsCollapse.hide();
                }
            });
        });
    }
});

 document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
});