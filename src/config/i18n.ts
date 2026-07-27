import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageOption } from '../types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'fr', label: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
];

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        services: 'Services',
        faqs: 'FAQs',
        contact: 'Contact',
        cmsData: 'CMS & Resume Data',
        downloadResume: 'Download Resume',
        hireMe: 'Hire Me'
      },
      hero: {
        greeting: "Hello, I'm",
        availableBadge: 'Available for React & React Native Roles',
        viewProjects: 'View Projects',
        exploreCms: 'Inspect Resume Data (JSON)',
        keyStrengthsTitle: 'Core Engineering Pillars'
      },
      sections: {
        aboutTitle: 'About Me & Career Story',
        skillsTitle: 'Technical Skills & Proficiency',
        experienceTitle: 'Professional Experience',
        projectsTitle: 'Featured Engineering Projects',
        servicesTitle: 'Services & Capabilities',
        faqsTitle: 'Recruiter FAQ & Key Insights',
        contactTitle: 'Get In Touch',
        cmsTitle: 'Headless CMS & Structured Resume JSON'
      },
      projects: {
        searchPlaceholder: 'Search projects, technologies, or keywords...',
        categoryAll: 'All Categories',
        categoryMobile: 'Mobile Apps',
        categoryWeb: 'Web Applications',
        features: 'Key Features',
        challenges: 'Technical Challenges & Solutions',
        learned: 'Key Takeaways',
        value: 'Business Impact',
        improvements: 'Resume Bullet Points',
        viewDetails: 'Project Case Study',
        closeModal: 'Close'
      },
      contact: {
        nameLabel: 'Your Full Name',
        emailLabel: 'Email Address',
        subjectLabel: 'Subject / Project Description',
        messageLabel: 'Your Message',
        submitButton: 'Send Message',
        sending: 'Sending...',
        successMsg: 'Thank you! Your message has been received. I will reply shortly.'
      },
      cms: {
        copyJson: 'Copy Full Resume JSON',
        downloadJson: 'Download CMS Data (.json)',
        copied: 'Copied to Clipboard!',
        filterSection: 'Filter JSON Section'
      },
      footer: {
        rights: 'All rights reserved.',
        builtWith: 'Built with React 19, Ant Design 5, TypeScript & Headless CMS'
      }
    }
  },
  ta: {
    translation: {
      nav: {
        home: 'முகப்பு',
        about: 'என்னைப் பற்றி',
        skills: 'திறன்கள்',
        experience: 'அனுபவம்',
        projects: 'திட்டங்கள்',
        services: 'சேவைகள்',
        faqs: 'கேள்விகள்',
        contact: 'தொடர்பு கொள்ள',
        cmsData: 'CMS தரவு',
        downloadResume: 'ரெஸ்யூம் பதிவிறக்கம்',
        hireMe: 'வேலை வாய்ப்பு'
      },
      hero: {
        greeting: 'வணக்கம், நான்',
        availableBadge: 'ரியாக்ட் மற்றும் ரியாக்ட் நேட்டிவ் பணிகளுக்கு தயார்',
        viewProjects: 'திட்டங்களை காண்க',
        exploreCms: 'தரவுகளை காண்க (JSON)',
        keyStrengthsTitle: 'முக்கிய திறன்கள்'
      },
      sections: {
        aboutTitle: 'என்னைப் பற்றி',
        skillsTitle: 'தொழில்நுட்ப திறன்கள்',
        experienceTitle: 'பணி அனுபவம்',
        projectsTitle: 'முக்கிய திட்டங்கள்',
        servicesTitle: 'சேவைகள்',
        faqsTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
        contactTitle: 'தொடர்புகொள்ள',
        cmsTitle: 'CMS மற்றும் ரெஸ்யூம் தரவு'
      },
      projects: {
        searchPlaceholder: 'திட்டங்கள் அல்லது தொழில்நுட்பங்களைத் தேடுங்கள்...',
        categoryAll: 'அனைத்தும்',
        categoryMobile: 'மொபைல் செயலி',
        categoryWeb: 'இணையதளம்',
        features: 'முக்கிய அம்சங்கள்',
        challenges: 'சவால்கள் & தீர்வுகள்',
        learned: 'கற்றுக் கொண்டவை',
        value: 'வணிக மதிப்பு',
        improvements: 'ரெஸ்யூம் குறிப்புகள்',
        viewDetails: 'விவரங்களைக் காண்க',
        closeModal: 'மூடு'
      },
      contact: {
        nameLabel: 'உங்கள் பெயர்',
        emailLabel: 'மின்னஞ்சல் முகவரி',
        subjectLabel: 'தலைப்பு',
        messageLabel: 'செய்தி',
        submitButton: 'அனுப்பு',
        sending: 'அனுப்பப்படுகிறது...',
        successMsg: 'நன்றி! உங்கள் செய்தி பெறப்பட்டது.'
      },
      cms: {
        copyJson: 'JSON நகலெடு',
        downloadJson: 'பதிவிறக்கு (.json)',
        copied: 'நகலெடுக்கப்பட்டது!',
        filterSection: 'பிரிவு தேர்வு'
      },
      footer: {
        rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        builtWith: 'ரியாக்ட் 19 மற்றும் டைப்ஸ்கிரிப்ட் கொண்டு உருவாக்கப்பட்டது'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'عني',
        skills: 'المهارات',
        experience: 'الخبرة',
        projects: 'المشاريع',
        services: 'الخدمات',
        faqs: 'الأسئلة الشائعة',
        contact: 'تواصل معي',
        cmsData: 'بيانات CMS',
        downloadResume: 'تحميل السيرة الذاتية',
        hireMe: 'توظيف'
      },
      hero: {
        greeting: 'مرحباً، أنا',
        availableBadge: 'متاح لمشاريع React و React Native',
        viewProjects: 'عرض المشاريع',
        exploreCms: 'استكشاف بيانات السيرة الذاتية',
        keyStrengthsTitle: 'نقاط القوة الرئيسية'
      },
      sections: {
        aboutTitle: 'عني والمسيرة المهنية',
        skillsTitle: 'المهارات التقنية',
        experienceTitle: 'الخبرة المهنية',
        projectsTitle: 'المشاريع المتميزة',
        servicesTitle: 'الخدمات والقدرات',
        faqsTitle: 'أسئلة مسؤولي التوظيف',
        contactTitle: 'تواصل معي',
        cmsTitle: 'بيانات CMS وهيكلية السيرة الذاتية'
      },
      projects: {
        searchPlaceholder: 'بحث في المشاريع والتقنيات...',
        categoryAll: 'الكل',
        categoryMobile: 'تطبيقات الهاتف',
        categoryWeb: 'تطبيقات الويب',
        features: 'الميزات الرئيسية',
        challenges: 'التحديات والحلول',
        learned: 'ما تعلمته',
        value: 'القيمة التجارية',
        improvements: 'نقاط السيرة الذاتية',
        viewDetails: 'عرض التفاصيل',
        closeModal: 'إغلاق'
      },
      contact: {
        nameLabel: 'الاسم الكامل',
        emailLabel: 'البريد الإلكتروني',
        subjectLabel: 'الموضوع',
        messageLabel: 'الرسالة',
        submitButton: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        successMsg: 'شكراً لك! تم استلام رسالتك.'
      },
      cms: {
        copyJson: 'نسخ بيانات JSON',
        downloadJson: 'تحميل الملف (.json)',
        copied: 'تم النسخ!',
        filterSection: 'تصفية القسم'
      },
      footer: {
        rights: 'جميع الحقوق محفوظة.',
        builtWith: 'تم التطوير باستخدام React 19 و Ant Design 5'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        experience: 'Expérience',
        projects: 'Projets',
        services: 'Services',
        faqs: 'FAQ',
        contact: 'Contact',
        cmsData: 'Données CMS',
        downloadResume: 'Télécharger CV',
        hireMe: 'Recruter'
      },
      hero: {
        greeting: 'Bonjour, je suis',
        availableBadge: 'Disponible pour rôles React & React Native',
        viewProjects: 'Voir les Projets',
        exploreCms: 'Inspecter les Données CV (JSON)',
        keyStrengthsTitle: 'Forces Principales'
      },
      sections: {
        aboutTitle: 'À Propos & Mon Parcours',
        skillsTitle: 'Compétences Techniques',
        experienceTitle: 'Expérience Professionnelle',
        projectsTitle: 'Projets Phares',
        servicesTitle: 'Services & Expertises',
        faqsTitle: 'Questions Fréquentes Recruteurs',
        contactTitle: 'Me Contacter',
        cmsTitle: 'CMS Headless & Structure JSON'
      },
      projects: {
        searchPlaceholder: 'Rechercher projets, technologies...',
        categoryAll: 'Tous',
        categoryMobile: 'Apps Mobiles',
        categoryWeb: 'Applications Web',
        features: 'Fonctionnalités Clés',
        challenges: 'Défis & Solutions',
        learned: 'Apprentissages',
        value: 'Valeur Métier',
        improvements: 'Points pour CV',
        viewDetails: 'Étude de Cas',
        closeModal: 'Fermer'
      },
      contact: {
        nameLabel: 'Nom Complet',
        emailLabel: 'Adresse Email',
        subjectLabel: 'Sujet',
        messageLabel: 'Message',
        submitButton: 'Envoyer',
        sending: 'Envoi en cours...',
        successMsg: 'Merci ! Votre message a été reçu.'
      },
      cms: {
        copyJson: 'Copier JSON',
        downloadJson: 'Télécharger (.json)',
        copied: 'Copié !',
        filterSection: 'Filtrer Section'
      },
      footer: {
        rights: 'Tous droits réservés.',
        builtWith: 'Développé avec React 19 et Ant Design 5'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über mich',
        skills: 'Fähigkeiten',
        experience: 'Erfahrung',
        projects: 'Projekte',
        services: 'Dienstleistungen',
        faqs: 'FAQ',
        contact: 'Kontakt',
        cmsData: 'CMS Daten',
        downloadResume: 'Lebenslauf herunterladen',
        hireMe: 'Anstellen'
      },
      hero: {
        greeting: 'Hallo, ich bin',
        availableBadge: 'Verfügbar für React & React Native Rollen',
        viewProjects: 'Projekte ansehen',
        exploreCms: 'CV-Daten untersuchen (JSON)',
        keyStrengthsTitle: 'Kernkompetenzen'
      },
      sections: {
        aboutTitle: 'Über mich & Karriere',
        skillsTitle: 'Technische Fähigkeiten',
        experienceTitle: 'Berufserfahrung',
        projectsTitle: 'Ausgewählte Projekte',
        servicesTitle: 'Leistungen & Kompetenzen',
        faqsTitle: 'Recruiter FAQ',
        contactTitle: 'Kontaktieren Sie mich',
        cmsTitle: 'Headless CMS & JSON-Struktur'
      },
      projects: {
        searchPlaceholder: 'Projekte, Technologien suchen...',
        categoryAll: 'Alle',
        categoryMobile: 'Mobile Apps',
        categoryWeb: 'Webanwendungen',
        features: 'Hauptmerkmale',
        challenges: 'Herausforderungen & Lösungen',
        learned: 'Erkenntnisse',
        value: 'Geschäftswert',
        improvements: 'Lebenslauf-Punkte',
        viewDetails: 'Fallstudie ansehen',
        closeModal: 'Schließen'
      },
      contact: {
        nameLabel: 'Vollständiger Name',
        emailLabel: 'E-Mail-Adresse',
        subjectLabel: 'Betreff',
        messageLabel: 'Nachricht',
        submitButton: 'Nachricht senden',
        sending: 'Senden...',
        successMsg: 'Vielen Dank! Ihre Nachricht wurde empfangen.'
      },
      cms: {
        copyJson: 'JSON kopieren',
        downloadJson: 'Herunterladen (.json)',
        copied: 'Kopiert!',
        filterSection: 'Bereich filtern'
      },
      footer: {
        rights: 'Alle Rechte vorbehalten.',
        builtWith: 'Erstellt mit React 19 und Ant Design 5'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        skills: 'Habilidades',
        experience: 'Experiencia',
        projects: 'Proyectos',
        services: 'Servicios',
        faqs: 'Preguntas',
        contact: 'Contacto',
        cmsData: 'Datos CMS',
        downloadResume: 'Descargar CV',
        hireMe: 'Contratar'
      },
      hero: {
        greeting: 'Hola, soy',
        availableBadge: 'Disponible para roles React y React Native',
        viewProjects: 'Ver Proyectos',
        exploreCms: 'Explorar datos de CV (JSON)',
        keyStrengthsTitle: 'Fortalezas Clave'
      },
      sections: {
        aboutTitle: 'Sobre Mí y Mi Trayectoria',
        skillsTitle: 'Habilidades Técnicas',
        experienceTitle: 'Experiencia Profesional',
        projectsTitle: 'Proyectos Destacados',
        servicesTitle: 'Servicios y Capacidades',
        faqsTitle: 'Preguntas Frecuentes para Reclutadores',
        contactTitle: 'Ponte en Contacto',
        cmsTitle: 'CMS Headless y Estructura JSON'
      },
      projects: {
        searchPlaceholder: 'Buscar proyectos, tecnologías...',
        categoryAll: 'Todos',
        categoryMobile: 'Apps Móviles',
        categoryWeb: 'Aplicaciones Web',
        features: 'Características Clave',
        challenges: 'Desafíos y Soluciones',
        learned: 'Lo Que Aprendí',
        value: 'Valor de Negocio',
        improvements: 'Puntos del CV',
        viewDetails: 'Ver Caso de Estudio',
        closeModal: 'Cerrar'
      },
      contact: {
        nameLabel: 'Nombre Completo',
        emailLabel: 'Correo Electrónico',
        subjectLabel: 'Asunto',
        messageLabel: 'Mensaje',
        submitButton: 'Enviar Mensaje',
        sending: 'Enviando...',
        successMsg: '¡Gracias! Su mensaje ha sido recibido.'
      },
      cms: {
        copyJson: 'Copiar JSON',
        downloadJson: 'Descargar (.json)',
        copied: '¡Copiado!',
        filterSection: 'Filtrar Sección'
      },
      footer: {
        rights: 'Todos los derechos reservados.',
        builtWith: 'Construido con React 19 y Ant Design 5'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
