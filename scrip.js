// Base de datos de 80 preguntas sobre Windows
const questions = [
    {
        id: 1,
        question: "¿Cuál es el requisito mínimo de RAM para Windows 11?",
        options: ["2 GB", "4 GB", "8 GB", "16 GB"],
        correct: 1
    },
    {
        id: 2,
        question: "¿Qué comando se usa para ver la configuración de IP en Windows?",
        options: ["ipconfig", "ifconfig", "netstat", "ping"],
        correct: 0
    },
    {
        id: 3,
        question: "¿Qué versión de Windows fue la primera en incluir el menú Inicio?",
        options: ["Windows 95", "Windows 98", "Windows XP", "Windows 3.1"],
        correct: 0
    },
    {
        id: 4,
        question: "¿Qué herramienta de Windows permite programar tareas automáticas?",
        options: ["Task Scheduler", "Task Manager", "Services", "MSConfig"],
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
        question: "¿Qué tecla presionas para abrir el Administrador de tareas?",
        options: ["Ctrl+Alt+Del", "Ctrl+Shift+Esc", "Alt+F4", "Win+X"],
        correct: 1
    },
    {
        id: 8,
        question: "¿Qué es PowerShell?",
        options: ["Un editor de texto", "Un shell de línea de comandos", "Un antivirus", "Un navegador"],
        correct: 1
    },
    {
        id: 9,
        question: "¿Qué versión de Windows introdujo el Explorador de Windows?",
        options: ["Windows 95", "Windows 3.1", "Windows NT", "Windows 98"],
        correct: 0
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
        question: "¿Qué tecla abre el menú contextual en Windows?",
        options: ["Shift+F10", "Alt+F4", "Ctrl+F10", "Win+F10"],
        correct: 0
    },
    {
        id: 15,
        question: "¿Qué es el Registro de Windows?",
        options: ["Una base de datos de configuración", "Un archivo de sistema", "Un programa", "Un controlador"],
        correct: 0
    },
    {
        id: 16,
        question: "¿Qué herramienta permite desfragmentar el disco?",
        options: ["Disk Defragmenter", "Disk Cleanup", "CHKDSK", "Format"],
        correct: 0
    },
    {
        id: 17,
        question: "¿Qué versión de Windows introdujo el Centro de actividades?",
        options: ["Windows 7", "Windows 8", "Windows 10", "Windows Vista"],
        correct: 2
    },
    {
        id: 18,
        question: "¿Qué es UAC en Windows?",
        options: ["User Account Control", "Universal Access Control", "User Authentication Control", "Unified Access Control"],
        correct: 0
    },
    {
        id: 19,
        question: "¿Qué comando repara archivos del sistema?",
        options: ["SFC /scannow", "CHKDSK /f", "DISM", "Bootrec"],
        correct: 0
    },
    {
        id: 20,
        question: "¿Qué tecla permite capturar pantalla completa?",
        options: ["PrtScn", "Ctrl+P", "Alt+P", "Win+P"],
        correct: 0
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
        question: "¿Qué comando renueva la dirección IP?",
        options: ["ipconfig /renew", "ipconfig /release", "ipconfig /flushdns", "ipconfig /all"],
        correct: 0
    },
    {
        id: 25,
        question: "¿Qué herramienta crea y formatea particiones?",
        options: ["Disk Management", "Device Manager", "Computer Management", "Services"],
        correct: 0
    },
    {
        id: 26,
        question: "¿Qué archivo de paginación usa Windows?",
        options: ["pagefile.sys", "swapfile.sys", "hiberfil.sys", "system.sys"],
        correct: 0
    },
    {
        id: 27,
        question: "¿Qué es Hyper-V?",
        options: ["Virtualización", "Emulador", "Compilador", "Depurador"],
        correct: 0
    },
    {
        id: 28,
        question: "¿Qué comando muestra las variables de entorno?",
        options: ["set", "env", "path", "systeminfo"],
        correct: 0
    },
    {
        id: 29,
        question: "¿Qué tecla abre el Administrador de dispositivos?",
        options: ["Win+X", "Win+R", "Win+Pause", "Win+D"],
        correct: 2
    },
    {
        id: 30,
        question: "¿Qué es DirectX?",
        options: ["API multimedia", "Controlador", "Programa", "Juego"],
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
        question: "¿Qué es el Modo Seguro?",
        options: ["Arranque mínimo", "Modo juego", "Modo ahorro", "Modo turbo"],
        correct: 0
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
        question: "¿Qué tecla abre el menú Inicio?",
        options: ["Win", "Ctrl", "Alt", "Shift"],
        correct: 0
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
        question: "¿Qué comando apaga el equipo?",
        options: ["shutdown", "turnoff", "poweroff", "exit"],
        correct: 0
    },
    {
        id: 42,
        question: "¿Qué es el Firewall de Windows?",
        options: ["Seguridad de red", "Antivirus", "Backup", "Optimizador"],
        correct: 0
    },
    {
        id: 43,
        question: "¿Qué tecla cambia entre ventanas?",
        options: ["Alt+Tab", "Win+Tab", "Ctrl+Tab", "Shift+Tab"],
        correct: 0
    },
    {
        id: 44,
        question: "¿Qué es una red peer-to-peer?",
        options: ["Entre iguales", "Cliente-servidor", "Híbrida", "Malla"],
        correct: 0
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
        question: "¿Qué tecla minimiza todas las ventanas?",
        options: ["Win+D", "Win+M", "Win+Space", "Win+Home"],
        correct: 0
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
        options: ["tasklist", "pslist", "procs", "showtask"],
        correct: 0
    },
    {
        id: 50,
        question: "¿Qué es un script por lotes?",
        options: ["Archivo .bat", "Archivo .ps1", "Archivo .vbs", "Archivo .js"],
        correct: 0
    },
    {
        id: 51,
        question: "¿Qué tecla abre el cuadro de Ejecutar?",
        options: ["Win+R", "Win+E", "Win+F", "Win+P"],
        correct: 0
    },
    {
        id: 52,
        question: "¿Qué es el Administrador de tareas?",
        options: ["Monitoreo del sistema", "Editor de tareas", "Programador", "Depurador"],
        correct: 0
    },
    {
        id: 53,
        question: "¿Qué versión de Windows introdujo Cortana?",
        options: ["Windows 10", "Windows 8", "Windows 7", "Windows Vista"],
        correct: 0
    },
    {
        id: 54,
        question: "¿Qué es el Historial de archivos?",
        options: ["Backup", "Restauración", "Recuperación", "Copia de seguridad"],
        correct: 0
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
        question: "¿Qué tecla abre el Explorador de archivos?",
        options: ["Win+E", "Win+F", "Win+R", "Win+D"],
        correct: 0
    },
    {
        id: 58,
        question: "¿Qué es el modo tableta en Windows?",
        options: ["Interfaz táctil", "Modo ahorro", "Modo juego", "Modo avión"],
        correct: 0
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
        question: "¿Qué tecla bloquea la PC?",
        options: ["Win+L", "Win+K", "Win+U", "Win+I"],
        correct: 0
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
        question: "¿Qué tecla abre Configuración?",
        options: ["Win+I", "Win+S", "Win+A", "Win+Q"],
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
        question: "¿Qué tecla abre el Centro de Accesibilidad?",
        options: ["Win+U", "Win+A", "Win+C", "Win+H"],
        correct: 0
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
        question: "¿Qué tecla abre el Centro de redes?",
        options: ["Win+X", "Win+R", "Win+P", "Win+K"],
        correct: 0
    },
    {
        id: 74,
        question: "¿Qué es el modo de hibernación?",
        options: ["Guardar estado en disco", "Suspender", "Apagar", "Reiniciar"],
        correct: 0
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
        question: "¿Qué tecla abre el Administrador de tareas directamente?",
        options: ["Ctrl+Shift+Esc", "Ctrl+Alt+Del", "Win+X", "Alt+F4"],
        correct: 0
    },
    {
        id: 78,
        question: "¿Qué es el símbolo del sistema?",
        options: ["CMD", "PowerShell", "Terminal", "Consola"],
        correct: 0
    },
    {
        id: 79,
        question: "¿Qué versión de Windows introdujo el Explorador con cinta?",
        options: ["Windows 8", "Windows 7", "Windows 10", "Windows Vista"],
        correct: 0
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
