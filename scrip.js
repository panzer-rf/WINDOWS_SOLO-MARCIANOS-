// Base de datos de 80 preguntas sobre Windows
const questions = [
    {
        id: 1,
        question: "¿Que accion realiza el comando: sudo apt-get install samba?",
        options: ["Elimina linux", "Instala samba en ubuntu", "Crea script", "Prueba de escaneo"],
        correct: 1
    },
    {
        id: 2,
        question: "¿Qué es el el comando de diagnostico de red que se usa solo en Linux?",
        options: ["ipconfig", "ifconfig", "netstat", "Iptraf"],
        correct: 3
    },
    {
        id: 3,
        question: "¿Qué versión de Windows fue la primera en incluir el menú Inicio?",
        options: ["Windows 95", "Windows 98", "Windows XP", "Windows 3.1"],
        correct: 0
    },
    {
        id: 4,
        question: "¿Para que se usa la opcion cambiar configuracion de uso compartido avanzado del centro de redes y recursos compartidos?",
        options: ["Para configurar un perfil ajustado de unas caracteristicas determinadas, ya sea un perfil de una red en el hogar o de una red publica", "para ajustar parametros", "para ajustes", "Para configurar el uso de de los recursos de otros de la red"],
        correct: 0
    },
    {
        id: 5,
        question: "¿Qué sistema de archivos usa Windows por defecto?",
        options: ["NTFS", "FAT32", "exFAT", "ext4"],
        correct: 0
    },
    {
        id: 6,
        question: "¿Qué comando verifica la conectividad de red en Windows?",
        options: ["ping", "tracert", "pathping", "todas las anteriores"],
        correct: 3
    },
    {
        id: 7,
        question: "¿Cual es el comando que permite actualizar las directivas que han sido configurado?",
        options: ["dategp", "gpdate", "Upupdate", "Gpupdate"],
        correct: 3
    },
    {
        id: 8,
        question: "¿Cuales son los niveles que se aplican a los objetos de una GPO?",
        options: ["Equipo local sitio dominio unidad organizativa 👽", "Equipo local dominio LDAP-SITIO", "Sitio equipo red", "Sitio Local equipo local"],
        correct: 0
    },
    {
        id: 9,
        question: "¿Que instruccion se coloca en la ventana ejecutar para acceder ala informacion de sistema?",
        options: ["appwiz.cpl", "Ncpa.cpl", "Msinfo32", "ping"],
        correct: 2
    },
    {
        id: 10,
        question: "¿Qué archivo contiene la configuración de arranque en Windows?",
        options: ["boot.ini", "config.sys", "autoexec.bat", "msdos.sys"],
        correct: 0
    },
    {
        id: 11,
        question: "¿Qué herramienta permite ver eventos del sistema?",
        options: ["Event Viewer", "Task Manager", "Resource Monitor", "Performance Monitor"],
        correct: 0
    },
    {
        id: 12,
        question: "¿Qué significa NTFS?",
        options: ["New Technology File System", "Network Transfer File System", "NT File System", "New Transfer File System"],
        correct: 0
    },
    {
        id: 13,
        question: "¿Qué comando muestra las conexiones de red activas?",
        options: ["netstat", "nslookup", "arp", "route"],
        correct: 0
    },
    {
        id: 14,
        question: "¿Qué dispositivo se usa comúnmente para instalar Windows?",
        options: ["USB booteable", "Mouse", "Impresora", "Win+F10"],
        correct: 0
    },
    {
        id: 15,
        question: "¿Partición necesaria para instalar Windows (estilo moderno)?",
        options: [" HFS+", "NTFS 📁", "Tiene virus", " FAT32"],
        correct: 1
    },
    {
        id: 16,
        question: "¿Qué herramienta permite desfragmentar el disco?",
        options: ["Disk Defragmenter", "Disk Cleanup", "CHKDSK", "Format"],
        correct: 0
    },
    {
        id: 17,
        question: "¿Cuánto espacio libre mínimo recomienda Microsoft para Windows 11? 👽",
        options: [" 16 GB", "128 GB", " 32 GB", " 64 GB 💽"],
        correct: 3
    },
    {
        id: 18,
        question: "Ejemplo de servidor en red Windows: 👽",
        options: ["User Account Control", "Universal Access Control", " Solicitud de servicio 🌍", "Unified Access Control"],
        correct: 2
    },
    {
        id: 19,
        question: "¿Qué comando repara archivos del sistema?",
        options: ["SFC /scannow", "CHKDSK /f", "DISM", "Bootrec"],
        correct: 0
    },
    {
        id: 20,
        question: "¿Qué protocolo usa Active Directory para autenticación? 👽",
        options: ["PrtScn", "Ctrl+P", "Kerberos 🔒", "Win+P"],
        correct: 2
    },
    {
        id: 21,
        question: "¿Qué es BitLocker?",
        options: ["Cifrado de disco", "Antivirus", "Firewall", "Compresor de archivos"],
        correct: 0
    },
    {
        id: 22,
        question: "¿Qué comando muestra la tabla de enrutamiento?",
        options: ["route print", "netstat -r", "ambas", "ninguna"],
        correct: 2
    },
    {
        id: 23,
        question: "¿Qué servicio traduce nombres de dominio a IP?",
        options: ["DNS", "DHCP", "WINS", "HTTP"],
        correct: 0
    },
    {
        id: 24,
        question: "Herramienta administrativa para usuarios en dominio: 👽",
        options: [" Netplwiz", "Lusrmgr.msc", "Secpol.msc", "Usuarios y equipos de AD 👥"],
        correct: 3
    },
    {
        id: 25,
        question: "¿Qué herramienta crea y formatea particiones?",
        options: ["Disk Management", "Device Manager", "Computer Management", "Services"],
        correct: 0
    },
    {
        id: 26,
        question: "¿Qué DNS necesitan los clientes para unirse al dominio? 👽",
        options: ["8.8.8.8", "swapfile.sys", "Cualquier DNS público", "Que resuelva el dominio corporativo 🌐"],
        correct: 3
    },
    {
        id: 27,
        question: "Ventaja de cliente-servidor frente a P2P: ",
        options: ["Sin dependencia de red", "Emulador", "Administración centralizada ", "Más rápido siempre 👽"],
        correct: 2
    },
    {
        id: 28,
        question: "¿Qué comando muestra las variables de entorno?",
        options: ["set", "env", "path", "systeminfo"],
        correct: 0
    },
    {
        id: 29,
        question: "Comando para liberar IP en Windows:",
        options: [" ipconfig /flushdns", " ipconfig /all", " ipconfig /release 🔁", "ipconfig /renew"],
        correct: 2
    },
    {
        id: 30,
        question: "¿Qué archivo .bat muestra 'Hola mundo'? 👽",
        options: ["@echo Hola mundo 👾", "Console.log", "Programa", "Write-Host"],
        correct: 0
    },
    {
        id: 31,
        question: "¿Qué comando programa tareas en CMD?",
        options: ["schtasks", "at", "tasklist", "taskkill"],
        correct: 0
    },
    {
        id: 32,
        question: "Extensión de script batch en Windows: ",
        options: [".BS", "Modo juego", ".SH", " .bat o .cmd 🦇"],
        correct: 3
    },
    {
        id: 33,
        question: "¿Qué comando verifica el disco?",
        options: ["chkdsk", "scandisk", "diskcheck", "fsck"],
        correct: 0
    },
    {
        id: 34,
        question: "¿Qué es un dominio en Windows?",
        options: ["Red de equipos", "Grupo de trabajo", "Servidor", "Cliente"],
        correct: 0
    },
    {
        id: 35,
        question: "¿Qué protocolo asigna IP automáticamente?",
        options: ["DHCP", "DNS", "FTP", "SMTP"],
        correct: 0
    },
    {
        id: 36,
        question: "¿Qué comando mata un proceso?",
        options: ["taskkill", "kill", "endtask", "stop-process"],
        correct: 0
    },
    {
        id: 37,
        question: "¿Qué es Windows Update?",
        options: ["Actualizaciones", "Antivirus", "Firewall", "Backup"],
        correct: 0
    },
    {
        id: 38,
        question: "Para acceder desde Windows a recurso compartido de Samba, usas:",
        options: [" samba://", "MOUNT", "smbclient", "\\IP\recurso🌐"],
        correct: 3
    },
    {
        id: 39,
        question: "¿Qué es el Panel de Control?",
        options: ["Configuración", "Programas", "Juegos", "Red"],
        correct: 0
    },
    {
        id: 40,
        question: "¿Qué sistema de archivos permite archivos >4GB?",
        options: ["NTFS", "FAT32", "exFAT", "FAT16"],
        correct: 0
    },
    {
        id: 41,
        question: "¿Qué archivo de configuración principal tiene Samba en Linux?",
        options: ["/etc/smb.conf", " /var/lib/samba", "/etc/samba/config", "/etc/samba/smb.conf"],
        correct: 3
    },
    {
        id: 42,
        question: "¿Qué es el Firewall de Windows?",
        options: ["Seguridad de red", "Antivirus", "Backup", "Optimizador"],
        correct: 0
    },
    {
        id: 43,
        question: "¿Qué se debe configurar primero en la BIOS para instalar Windows desde USB?",
        options: ["teclado", "Hora de sistema", "GUI", "Boot priority (orden de arranque)"],
        correct: 3
    },
    {
        id: 44,
        question: "¿Qué herramienta permite ver los discos y particiones en Windows?",
        options: ["paint", "Administrador de discos", "Andriod", "router"],
        correct: 1
    },
    {
        id: 45,
        question: "¿Qué comando muestra la ruta a un destino?",
        options: ["tracert", "pathping", "route", "netstat"],
        correct: 0
    },
    {
        id: 46,
        question: "¿Qué es Active Directory?",
        options: ["Directorio de red", "Directorio activo", "Directorio de archivos", "Directorio de usuarios"],
        correct: 0
    },
    {
        id: 47,
        question: "¿Cuál es un ejemplo de mantenimiento correctivo?",
        options: ["Actualizar Windows", "Desfragmentar", "Reemplazar disco dañado", "Limpiar polvo"],
        correct: 2
    },
    {
        id: 48,
        question: "¿Qué es el Modo Dios en Windows?",
        options: ["Carpeta especial", "Modo administrador", "Modo seguro", "Modo recovery"],
        correct: 0
    },
    {
        id: 49,
        question: "¿Qué comando muestra procesos en ejecución?",
        options: ["mkdir", "pslist", "procs", "tasklist"],
        correct: 3
    },
    {
        id: 50,
        question: "¿Qué es un script por lotes?",
        options: ["Archivo .bat", "Archivo .ps1", "Archivo .vbs", "Archivo .js"],
        correct: 0
    },
    {
        id: 51,
        question: "¿Qué significa red Peer-to-Peer?",
        options: ["Solo un servidor controla todo", "Solo hay un cliente", "Solo hay internet", "Todos los equipos comparten recursos entre sí"],
        correct: 3
    },
    {
        id: 52,
        question: "¿Qué es el Administrador de tareas?",
        options: ["Monitoreo del sistema", "Editor de tareas", "Programador", "Depurador"],
        correct: 0
    },
    {
        id: 53,
        question: "¿Qué sistema usa servidor central?",
        options: ["Peer to Peer", "Windows 8", "Windows 7", "Cliente-Servidor"],
        correct: 3
    },
    {
        id: 54,
        question: "¿Qué es el Historial de archivos?",
        options: ["copia de seguridad", "Restauración", "Recuperación", "Backup"],
        correct: 3
    },
    {
        id: 55,
        question: "¿Qué comando libera DNS?",
        options: ["ipconfig /flushdns", "ipconfig /release", "ipconfig /renew", "ipconfig /registerdns"],
        correct: 0
    },
    {
        id: 56,
        question: "¿Qué es una política de grupo?",
        options: ["Configuración de red", "Configuración local", "Configuración de usuarios", "Todas"],
        correct: 3
    },
    {
        id: 57,
        question: "¿Ejemplo de red Cliente-Servidor?",
        options: ["USB compartido", "Bluetooth", "Dos PCs conectadas", "Dominio Windows con servidor central"],
        correct: 3
    },
    {
        id: 58,
        question: "¿Qué protocolo usa Windows para compartir archivos?",
        options: ["FTP", "HTTP", "SMB", "SMTP"],
        correct: 2
    },
    {
        id: 59,
        question: "¿Qué comando muestra información del sistema?",
        options: ["systeminfo", "sysinfo", "info", "msinfo32"],
        correct: 0
    },
    {
        id: 60,
        question: "¿Qué es un grupo en el hogar?",
        options: ["Compartir recursos", "Red local", "Grupo de trabajo", "Dominio"],
        correct: 0
    },
    {
        id: 61,
        question: "¿Qué archivo se usa para automatización en Windows?",
        options: [".doc", ".bat", ".jpg", ".pgn"],
        correct: 1
    },
    {
        id: 62,
        question: "¿Qué es Windows Defender?",
        options: ["Antivirus", "Firewall", "Antimalware", "Todas"],
        correct: 2
    },
    {
        id: 63,
        question: "¿Qué comando muestra los servicios?",
        options: ["services.msc", "msconfig", "taskmgr", "compmgmt.msc"],
        correct: 0
    },
    {
        id: 64,
        question: "¿Qué es el modo de compatibilidad?",
        options: ["Ejecutar programas antiguos", "Modo seguro", "Modo ahorro", "Modo juego"],
        correct: 0
    },
    {
        id: 65,
        question: "¿Qué comando muestra archivos en un script .bat?",
        options: ["dir", "Show", "ls", "file"],
        correct: 0
    },
    {
        id: 66,
        question: "¿Qué es el Administrador de discos?",
        options: ["Gestión de particiones", "Gestión de archivos", "Gestión de programas", "Gestión de usuarios"],
        correct: 0
    },
    {
        id: 67,
        question: "¿Qué comando formatea un disco?",
        options: ["format", "diskpart", "fdisk", "mkfs"],
        correct: 0
    },
    {
        id: 68,
        question: "¿Qué es el Visor de eventos?",
        options: ["Registro de eventos", "Monitor de rendimiento", "Administrador de tareas", "Administrador de servicios"],
        correct: 0
    },
    {
        id: 69,
        question: "¿Qué cable se usa comúnmente en redes LAN?",
        options: ["VGA", "SATA", "HDMI", "UTP Ethernet"],
        correct: 3
    },
    {
        id: 70,
        question: "¿Qué es PowerShell ISE?",
        options: ["Entorno de scripts", "Editor de texto", "Consola", "Depurador"],
        correct: 0
    },
    {
        id: 71,
        question: "¿Qué comando administra particiones?",
        options: ["diskpart", "fdisk", "parted", "gdisk"],
        correct: 0
    },
    {
        id: 72,
        question: "¿Qué es el Programador de tareas?",
        options: ["Automatizar tareas", "Administrar procesos", "Monitorear sistema", "Optimizar rendimiento"],
        correct: 0
    },
    {
        id: 73,
        question: "¿Qué tipo de mantenimiento elimina virus?",
        options: ["Preventivo", "Físico", "Predictivo", "Correctivo"],
        correct: 3
    },
    {
        id: 74,
        question: "¿Qué servicio permite compartir carpetas en Linux para Windows?",
        options: ["DNS", "FTP", "APACHE", "Samba"],
        correct: 3
    },
    {
        id: 75,
        question: "¿Qué comando muestra la configuración de red?",
        options: ["ipconfig /all", "netstat -a", "nslookup", "ping -t"],
        correct: 0
    },
    {
        id: 76,
        question: "¿Qué es un punto de restauración?",
        options: ["Copia de seguridad del sistema", "Backup de archivos", "Copia de seguridad", "Imagen del sistema"],
        correct: 0
    },
    {
        id: 77,
        question: "¿Qué archivo configura Samba?",
        options: ["config.sys", "autoexec.bat", "smb.conf", "hosts"],
        correct: 2
    },
    {
        id: 78,
        question: "¿Qué es el símbolo del sistema?",
        options: ["CMD", "PowerShell", "Terminal", "Consola"],
        correct: 0
    },
    {
        id: 79,
        question: "¿Qué acción mejora el rendimiento del disco duro?",
        options: ["Windows 8", "Windows 7", "Desfragmentar disco", "Windows Vista"],
        correct: 2
    },
    {
        id: 80,
        question: "¿Qué es Windows Sandbox?",
        options: ["Entorno aislado", "Máquina virtual", "Contenedor", "Emulador"],
        correct: 0
    }
];

// URLs de memes (GIFs)
const memes = {
    correct: [
        "https://media.giphy.com/media/3o7abB06u9bNzA8LC8/giphy.gif",
        "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif",
        "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
        "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
    ],
    incorrect: [
        "https://media.giphy.com/media/l0MYt5jH6gkTWm8qo/giphy.gif",
        "https://media.giphy.com/media/3o7abB06u9bNzA8LC8/giphy.gif",
        "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif",
        "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
    ],
    perfect: [
        "https://media.giphy.com/media/l0MYt5jH6gkTWm8qo/giphy.gif",
        "https://media.giphy.com/media/3o7abB06u9bNzA8LC8/giphy.gif",
        "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif"
    ],
    neutral: "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif"
};

// Frases épicas
const epicPhrases = [
    "¡FELICIDADES! ERES UN MARCIANO DE NIVEL ÉPICO 👾",
    "¡LA NASA TE QUIERE CONTRATAR! 🚀",
    "¡ERES EL ELEGIDO, MAESTRO WINDOWS! 💻",
    "¡TU CONOCIMIENTO ES INTERGALÁCTICO! 🌟",
    "¡BILL GATES TE TIENE ENVIDIA! 👑",
    "¡ERES UN CIBERNETICUS MARCIANUS! 🦾",
    "¡LA FUERZA DE WINDOWS TE ACOMPAÑA! ⚡",
    "¡100% MARCIANO, 0% TERRÍCOLA! 👽"
];

const failPhrases = [
    "❌ ESTUDIA CHATO, VUELVE A INTENTARLO ❌",
    "👎 Nivel terrícola bajo, necesitas entrenamiento 👎",
    "📚 La abducción de conocimiento falló... 📚",
    "💥 Windows no está orgulloso de ti 💥",
    "🤔 Ni con Ctrl+Z se arregla esto 🤔",
    "😅 Tu CPU mental necesita overclocking 😅"
];

// Variables globales
let currentScore = 0;
let answeredCount = 0;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
    setupEventListeners();
    updateProgress();
});

// Cargar preguntas
function loadQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.dataset.id = q.id;
        card.dataset.index = index;

        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label class="option-item">
                    <input type="radio" name="q${q.id}" value="${optIndex}">
                    <span>${opt}</span>
                </label>
            `;
        });

        card.innerHTML = `
            <div class="question-number">Pregunta #${q.id}</div>
            <div class="question-text">${q.question}</div>
            <div class="options-container">
                ${optionsHtml}
            </div>
        `;

        container.appendChild(card);
    });
}

// Configurar event listeners
function setupEventListeners() {
    document.getElementById('submitBtn').addEventListener('click', checkExam);
    document.getElementById('resetBtn').addEventListener('click', resetExam);

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterQuestions(e.target.dataset.filter);
        });
    });

    // Escuchar cambios en respuestas
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateProgress);
    });
}

// Filtrar preguntas
function filterQuestions(filter) {
    const cards = document.querySelectorAll('.question-card');

    cards.forEach(card => {
        const hasAnswer = card.querySelector('input:checked') !== null;

        switch(filter) {
            case 'all':
                card.style.display = 'block';
                break;
            case 'answered':
                card.style.display = hasAnswer ? 'block' : 'none';
                break;
            case 'unanswered':
                card.style.display = hasAnswer ? 'none' : 'block';
                break;
        }
    });
}

// Actualizar progreso
function updateProgress() {
    const total = questions.length;
    const answered = document.querySelectorAll('input[type="radio"]:checked').length;
    answeredCount = answered;

    const progress = (answered / total) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

// Corregir examen
function checkExam() {
    let correctCount = 0;
    const total = questions.length;

    questions.forEach(q => {
        const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
        const card = document.querySelector(`.question-card[data-id="${q.id}"]`);

        if (selected) {
            const answer = parseInt(selected.value);
            if (answer === q.correct) {
                correctCount++;
                card.classList.add('correct');
                card.classList.remove('incorrect');
            } else {
                card.classList.add('incorrect');
                card.classList.remove('correct');
            }
        } else {
            card.classList.remove('correct', 'incorrect');
        }
    });

    currentScore = correctCount;
    document.getElementById('scoreValue').textContent = currentScore;

    // Mostrar feedback y meme
    showFeedback(correctCount === total);

    // Mostrar modal con resultado
    showResultModal(correctCount, total);
}

// Mostrar feedback
function showFeedback(isPerfect) {
    const memeImg = document.getElementById('memeImage');
    const feedbackDiv = document.querySelector('.typing-effect');

    if (isPerfect) {
        // 100% correcto
        memeImg.src = memes.perfect[Math.floor(Math.random() * memes.perfect.length)];
        feedbackDiv.textContent = "🚀 ¡RESPUESTA CORRECTA! ERES UN MARCIANO 🚀";
        feedbackDiv.style.color = '#00b894';
    } else {
        // Hay errores
        memeImg.src = memes.incorrect[Math.floor(Math.random() * memes.incorrect.length)];
        feedbackDiv.textContent = "❌ RESPUESTA INCORRECTA... ESTUDIA CHATO ❌";
        feedbackDiv.style.color = '#d63031';
    }
}

// Mostrar modal con resultado
function showResultModal(correct, total) {
    const modal = document.getElementById('resultModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const finalScore = document.getElementById('finalScore');
    const resultGif = document.getElementById('resultGif');

    const percentage = (correct / total) * 100;
    finalScore.textContent = `${correct}/${total}`;

    if (correct === total) {
        // 100% - Respuesta épica
        modalTitle.textContent = "🎉 ¡MARCIANO TOTAL! 🎉";
        modalMessage.textContent = epicPhrases[Math.floor(Math.random() * epicPhrases.length)];
        resultGif.innerHTML = `<img src="${memes.perfect[Math.floor(Math.random() * memes.perfect.length)]}" alt="Épico">`;
    } else if (percentage >= 70) {
        // Buen puntaje pero no perfecto
        modalTitle.textContent = "👍 BUEN TRABAJO 👍";
        modalMessage.textContent = "¡Casi llegas a Marciano! Sigue practicando";
        resultGif.innerHTML = `<img src="${memes.correct[Math.floor(Math.random() * memes.correct.length)]}" alt="Buen trabajo">`;
    } else {
        // Bajo puntaje
        modalTitle.textContent = "😅 NECESITAS ESTUDIAR 😅";
        modalMessage.textContent = failPhrases[Math.floor(Math.random() * failPhrases.length)];
        resultGif.innerHTML = `<img src="${memes.incorrect[Math.floor(Math.random() * memes.incorrect.length)]}" alt="Estudia chato">`;
    }

    modal.classList.add('show');
}

// Cerrar modal
function closeModal() {
    document.getElementById('resultModal').classList.remove('show');
}

// Reiniciar examen
function resetExam() {
    // Limpiar todas las respuestas
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });

    // Limpiar clases de las tarjetas
    document.querySelectorAll('.question-card').forEach(card => {
        card.classList.remove('correct', 'incorrect');
    });

    // Resetear puntaje y progreso
    currentScore = 0;
    document.getElementById('scoreValue').textContent = '0';
    updateProgress();

    // Resetear meme y feedback
    document.getElementById('memeImage').src = memes.neutral;
    document.querySelector('.typing-effect').textContent = "👾 ¡Bienvenido Terrícola! 👾";
    document.querySelector('.typing-effect').style.color = '#fff';

    // Resetear filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        }
    });
    filterQuestions('all');
}
