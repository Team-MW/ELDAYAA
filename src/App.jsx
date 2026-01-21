import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from 'react-router-dom';
import {
    Menu as MenuIcon,
    X,
    Phone,
    MapPin,
    Clock,
    Instagram,
    Facebook,
    ChevronRight,
    Utensils,
    Leaf,
    Flame,
    Coffee,
    ExternalLink
} from 'lucide-react';
import foodImage from './assets/side-view-chebureks-kutab-fried-chebureks-with-cheese-herbs-meat-with-sauce-dark-wooden-table.jpg';

// --- Mentions Légales Component ---
const MentionsLegales = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="legal-page container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="section-header">
                <span className="script-font gold">Informations Légales</span>
                <h1>Mentions Légales</h1>
                <div className="divider"></div>
            </div>
            <div className="legal-content" style={{ marginTop: '40px', color: 'var(--text-muted)' }}>
                <div className="legal-block" style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>1. Présentation du site</h3>
                    <p>Propriétaire : Restaurant EL DAYAA</p>
                    <p>Adresse : 23 Bd Lascrosses, 31000 Toulouse</p>
                    <p>Téléphone : 05 61 12 22 00</p>
                </div>
                <div className="legal-block" style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>2. Hébergement</h3>
                    <p>Le site est hébergé par [Nom de votre hébergeur]</p>
                </div>
                <div className="legal-block" style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>3. Propriété intellectuelle</h3>
                    <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
                </div>
                <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>Retour à l'accueil</Link>
            </div>
        </section>
    );
};

// --- Data ---
const menuData = {
    entrées_chaudes: {
        title: "Entrées Chaudes",
        price: "7,50 €",
        items: [
            { name: "Kebbé", desc: "2 pièces" },
            { name: "Fallafel", desc: "4 pièces" },
            { name: "Fatayer", desc: "Viande, Fromage ou Épinards (4 pièces)" },
            { name: "Foies de volaille", desc: "Sautés au citron", extra: "+1,00 €" },
            { name: "Poulet Crispy", desc: "4 pièces" },
            { name: "Ouzi", desc: "Feuille de brique farcie à la viande hachée, riz et petits pois", extra: "+1,50 €" },
            { name: "Roulés au fromage", desc: "2 pièces" }
        ],
        icon: <Flame size={20} />
    },
    entrées_froides: {
        title: "Entrées Froides",
        price: "6,50 €",
        items: [
            { name: "Hommos", desc: "Purée de pois chiches" },
            { name: "Moutabal", desc: "Caviar d'aubergines" },
            { name: "Moussaka", desc: "Pois chiches, aubergines, sauce tomate" },
            { name: "Taboulé", desc: "Blé concassé, persil, tomates, oignons" },
            { name: "Feuilles de vignes", desc: "Farcies au riz" },
            { name: "Baba Ghanouj", desc: "Aubergines grillées, noix" },
            { name: "Fatoush", desc: "Tomates, concombres, oignons, pain grillé" },
            { name: "Cheinklish", desc: "Fromage Gombi, oignons, poivrons, pain grillé" }
        ],
        icon: <Leaf size={20} />
    },
    plats: {
        title: "Les Plats",
        price: "15,00 €",
        items: [
            { name: "Assiette Chawarma", desc: "Agneau, poulet ou boeuf avec salade et frites" },
            { name: "Assiette Chiche Taouk", desc: "Brochettes de poulet accompagnées de salade et frites" },
            { name: "Assiette Kafta", desc: "Viande hachée avec salade et frites" },
            { name: "Assiette Falafel", desc: "Beignets de légumes avec salade, hommos, moutabal" },
            { name: "Assiette Végétarienne", desc: "Hommos, Moutabal, Taboulé, Moussaka, Faté et Cheinklish" },
            { name: "Assiette Ouzi", desc: "Brique farcie riz, petits pois, viande hachée, Laban et crudités" }
        ],
        icon: <Utensils size={20} />
    },
    patisseries: {
        title: "Les Pâtisseries",
        price: "2,50 € / pièce",
        items: [
            { name: "Baklawa", desc: "Amande, pâte filo, miel" },
            { name: "Maamoul", desc: "Datte, Noix ou Pistache" },
            { name: "Cornes de Gazelle", desc: "Amande, sucre, fleur d'oranger" },
            { name: "Katayef", desc: "Cheveux d'ange, amande, miel" },
            { name: "Loukoum", desc: "Parfums variés" }
        ],
        icon: <Coffee size={20} />
    }
};

const formulaData = [
    {
        name: "Menu El Dayaa",
        price: "23,00 €",
        desc: "4 portions d'entrée froide, plat chaud au choix, dessert ou café"
    },
    {
        name: "Menu Dégustation",
        price: "56,00 €",
        desc: "Pour 2 personnes. 4 entrées froides, 4 entrées chaudes, assortiment de grillades, dessert et café"
    },
    {
        name: "Menu Déjeuner",
        price: "16,50 €",
        desc: "1 entrée froide au choix, 1 plat chaud avec accompagnement"
    }
];

// --- Components ---

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.div
                className="scroll-progress"
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--primary)',
                    transformOrigin: '0%',
                    zIndex: 2000
                }}
            />
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container nav-content">
                    <Link to="/" className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="logo-circle">
                            <span className="logo-tree">🌲</span>
                        </div>
                        <div className="logo-text">
                            <span className="logo-name">EL DAYAA</span>
                            <span className="logo-tag">MAISON LIBANAISE</span>
                        </div>
                    </Link>

                    <div className="desktop-links">
                        <a href="#home">Accueil</a>
                        <a href="#menu">La Carte</a>
                        <a href="#about">Notre Histoire</a>
                        <a href="#contact" className="btn-primary">Réserver</a>
                    </div>

                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <MenuIcon />}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Accueil</a>
                            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>La Carte</a>
                            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Notre Histoire</a>
                            <a href="#contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Réserver</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-subtitle script-font"
                >
                    Bienvenue chez El Dayaa
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    L'Authenticité du <span className="text-primary">Liban</span> à votre table
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Depuis 1955, nous partageons avec vous les secrets de la cuisine traditionnelle libanaise dans un cadre chaleureux et raffiné.
                </motion.p>
                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.a
                        href="#menu"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Découvrir la Carte
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Nous Trouver
                    </motion.a>
                </motion.div>
            </div>
            <div className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    ↓
                </motion.div>
            </div>
        </section>
    );
};

const MenuSection = () => {
    const [activeTab, setActiveTab] = useState('entrées_froides');

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <div className="section-header">
                    <span className="script-font gold">Saveurs du Moyen-Orient</span>
                    <h2>Notre Carte</h2>
                    <div className="divider"></div>
                </div>

                <div className="menu-tabs">
                    {Object.keys(menuData).map((key) => (
                        <button
                            key={key}
                            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                            onClick={() => setActiveTab(key)}
                        >
                            {menuData[key].icon}
                            <span>{menuData[key].title}</span>
                        </button>
                    ))}
                </div>

                <div className="menu-grid">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="menu-items-container"
                        >
                            <div className="menu-category-info">
                                <h3>{menuData[activeTab].title}</h3>
                                <span className="base-price">À partir de {menuData[activeTab].price}</span>
                            </div>
                            <div className="items-list">
                                {menuData[activeTab].items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="menu-item-row"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="item-name-desc">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-desc">{item.desc}</span>
                                        </div>
                                        {item.extra && <span className="item-extra">{item.extra}</span>}
                                        <div className="item-dots"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="formulas-grid">
                    {formulaData.map((formula, idx) => (
                        <motion.div
                            key={idx}
                            className="formula-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                rotateX: 2,
                                rotateY: 2,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(196, 30, 58, 0.2)"
                            }}
                            style={{ perspective: 1000 }}
                        >
                            <div className="formula-header">
                                <h3>{formula.name}</h3>
                                <span className="formula-price">{formula.price}</span>
                            </div>
                            <p>{formula.desc}</p>
                            <div className="formula-border"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const InfiniteBanner = () => {
    const images = [
        "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1547928576-a4a33237ce35?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=400"
    ];

    // Duplicate list to ensure seamless transition
    const infiniteImages = [...images, ...images];

    return (
        <div className="infinite-banner">
            <div className="banner-track">
                {infiniteImages.map((src, idx) => (
                    <div key={idx} className="banner-item">
                        <img src={src} alt={`Lebanese Dish ${idx}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="container about-grid"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="about-image">
                    <div className="image-frame">
                        <img src={foodImage} alt="Lebanese Food" />
                    </div>
                    <div className="experience-badge">
                        <span className="years">70</span>
                        <span className="exp-text">Ans de<br />Tradition</span>
                    </div>
                </div>
                <div className="about-content">
                    <span className="script-font gold">Notre Héritage</span>
                    <h2>L'histoire d'une Passion</h2>
                    <p style={{ fontSize: '1.5rem', lineHeight: '1.4', color: 'var(--text-main)', fontStyle: 'italic' }}>
                        "L'authenticité de la cuisine libanaise, transmise avec amour de génération en génération depuis 1955."
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

const ContactSection = () => {
    const schedule = [
        { day: "Lun - Ven", hours: "12:00 - 23:30" },
        { day: "Samedi", hours: "12:00 - 00:00" },
        { day: "Dimanche", hours: "Fermé", closed: true }
    ];

    const services = [
        { name: "Terrasse", icon: <Utensils size={16} /> },
        { name: "Plats végétaliens", icon: <Leaf size={16} /> },
        { name: "Wi-Fi gratuit", icon: <span style={{ fontSize: '14px' }}>📶</span> }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="script-font gold">Nous rendre visite</span>
                    <h2>Contact & Horaires</h2>
                    <div className="divider"></div>
                </div>

                <div className="contact-top-info">
                    <div className="contact-info-card">
                        <div className="info-icon-circle"><MapPin /></div>
                        <h3>Notre Adresse</h3>
                        <p>23 Bd Lascrosses, 31000 Toulouse</p>
                        <div className="services-list" style={{ justifyContent: 'center' }}>
                            {services.map((s, i) => (
                                <span key={i} className="service-badge">
                                    {s.icon} {s.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div className="info-icon-circle"><Clock /></div>
                        <h3>Horaires d'ouverture</h3>
                        <div className="hours-list-simple">
                            {schedule.map((item, i) => (
                                <div key={i} className={`hour-row-simple ${item.closed ? 'closed' : ''}`}>
                                    <span>{item.day} :</span>
                                    <span>{item.hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div className="info-icon-circle"><Phone /></div>
                        <h3>Téléphone</h3>
                        <p>05 61 12 22 00</p>
                        <a href="tel:0561122200" className="btn-call">Appeler maintenant</a>
                    </div>
                </div>

                <div className="map-wrapper">
                    <div className="map-header">
                        <div className="map-title-row">
                            <MapPin size={20} className="text-primary" />
                            <span>Trouvez-nous sur Google Maps</span>
                        </div>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=23+Bd+Lascrosses+31000+Toulouse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-map-link"
                        >
                            Itinéraire <ExternalLink size={14} />
                        </a>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2888.7615951666663!2d1.433888888888889!3d43.60833333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb62bf478881%3A0x600b6562accb6d2!2s23%20Bd%20Lascrosses%2C%2031000%20Toulouse!5e0!3m2!1sfr!2sfr!4v1711030000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <div className="logo-container">
                        <div className="logo-circle">
                            <span className="logo-tree">🌲</span>
                        </div>
                        <span className="logo-name">EL DAYAA</span>
                    </div>
                    <p>Vivez une expérience culinaire unique au cœur de la cuisine libanaise.</p>
                    <div className="social-links">
                        <motion.a whileHover={{ y: -5, backgroundColor: 'var(--primary)' }} href="#"><Instagram size={20} /></motion.a>
                        <motion.a whileHover={{ y: -5, backgroundColor: 'var(--primary)' }} href="#"><Facebook size={20} /></motion.a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Vite Lu</h4>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#menu">La Carte</a></li>
                        <li><a href="#about">Notre Histoire</a></li>
                        <li><Link to="/mentions-legales">Mentions Légales</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Nous Trouver</h4>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>23 Bd Lascrosses, 31000 Toulouse</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>05 61 12 22 00</span>
                    </div>
                    <div className="contact-item">
                        <Clock size={18} />
                        <span>Ouvert 7j/7 (Sauf Dimanche)</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Restaurant El Dayaa. Créé avec passion par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '600' }}>Microdidact</a>.</p>
            </div>
        </footer>
    );
};

function MainLayout() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <InfiniteBanner />
            <MenuSection />
            <About />
            <ContactSection />
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/mentions-legales" element={
                    <>
                        <Navbar />
                        <MentionsLegales />
                        <Footer />
                    </>
                } />
            </Routes>
        </Router>
    );
}

export default App;
