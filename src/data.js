import ilhadeluanda from "./images/ilhadeluanda.jpg";
import kalandula from "./images/kalandula.jpg";
import kalandula2 from "./images/kalandula2.jpg";
import praiadabaiaazul from "./images/praia-da-baia-azul.jpg";
import praiamorena from "./images/praiamorena.jpg";
import tundavala from "./images/tundavala.jpg";


export const pageLinks = [
    {id: 1, href: "#home", text: "Home"},
    {id: 2, href: "#about", text: "About"},
    {id: 3, href: "#services", text: "Services"},
    {id: 4, href: "#tours", text: "Tours"}
]


export const socialLinks = [
    {id: 1, href: "", icon: "fab fa-facebook"},
    {id: 2, href: "", icon: "fab fa-twitter"},
    {id: 3, href: "", icon: "fab fa-squarespace"}
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'poupando dinheiro',
        text: 'Economize em seus passeios com as melhores ofertas.'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'caminhadas sem fim',
        text: 'Explore trilhas inesquecíveis.'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'conforto incrível',
        text: 'Desfrute de uma experiência única com acomodações aconchegantes.'
    }
]

export const tours = [
    {
        id: 1, 
        image: ilhadeluanda,
        date: 'agosto 26, 2025',
        title: 'Aventuras na ilha de luanda',
        info: 'Aventure-se na Ilha de Luanda e descubra um paraíso repleto de beleza natural e experiências emocionantes.',
        location:'Luanda',
        duration: '6 dias',
        cost: "kz10.000",
        
    },
    {
        id: 2, 
        image: kalandula,
        date: 'outubro 1, 2025',
        title: 'aventuras em malange',
        info: 'Aventure-se a ver as quedas de kalandula e descubra um paraíso repleto de beleza natural e experiências emocionantes.',
        location:'malange',
        duration: '11 dias',
        cost: 'kz15.000',
        
    },
    {
        id: 3, 
        image: praiamorena,
        date: 'setembro 15, 2025',
        title: 'aventuras em benguela',
        info: 'Aventure-se a experimentar as maravilhas e descubra um paraíso repleto de beleza natural e experiências emocionantes.',
        location:'benguela',
        duration: '8 dias',
        cost: 'kz20.000',
        
    },
    
]


