document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // -------------------- DADOS E CONFIGURAÇÕES DE IDIOMA --------------------
    // =========================================================================

    const translations = {
        'pt': {
            'title': 'Book Store - Sua Livraria Online',
            'nav.books': 'Livros',
            'nav.login': 'Login/Cadastro',
            'hero.headline': 'Descubra o Próximo Capítulo da Sua Vida',
            'hero.tagline': 'Os melhores títulos, com preços imbatíveis.',
            'hero.button': 'Ver Livros',
            'section.featured': 'Nossos Livros em Destaque',
            'section.access': 'Acesso Rápido',
            'form.email': 'E-mail',
            'form.password': 'Senha',
            'form.loginBtn': 'Entrar',
            'form.create': 'Criar Conta',
            'menu.categories_title': 'Categorias',
            'cart.title': 'Seu Carrinho',
            'cart.empty': 'Seu carrinho está vazio.',
            'cart.total': 'Total:',
            'cart.checkout': 'Fechar Compra',
            'footer.brand': 'Book Store',
            'footer.mission': 'Nossa missão é conectar leitores e histórias, oferecendo os melhores títulos com a comodidade do online.',
            'footer.linksTitle': 'Links Úteis',
            'footer.privacy': 'Política de Privacidade',
            'footer.terms': 'Termos de Uso',
            'footer.returns': 'Trocas e Devoluções',
            'footer.devTitle': 'Desenvolvimento',
            'footer.devName': 'Projeto de: **Gabriel Card**',
            'footer.linkedin': 'Perfil LinkedIn',
            'footer.copy': '&copy; 2025 Book Store. Todos os direitos reservados. | Desenvolvido com <i class="fas fa-heart"></i>',
            'product.add_to_cart': 'Adicionar ao Carrinho',
            'product.remove': 'Remover',
            'promo.1': 'PROMOÇÃO DO DIA: 20% OFF em todos os Clássicos!',
            'promo.2': 'Frete Grátis acima de R$ 99,00. Aproveite agora!',
            'promo.3': 'Ganhe 1 livro grátis na sua primeira compra!',
            'alert.checkout': 'Compra finalizada! Total: ',
            'category.all': 'Todos os Livros',
            'category.action': 'Ação e Aventura',
            'category.horror': 'Terror e Suspense',
            'category.fantasy': 'Fantasia Épica',
            'category.scifi': 'Ficção Científica'
        },
        'en': {
            'title': 'Book Store - Your Online Bookstore',
            'nav.books': 'Books',
            'nav.login': 'Login/Register',
            'hero.headline': 'Discover the Next Chapter of Your Life',
            'hero.tagline': 'The best titles, with unbeatable prices.',
            'hero.button': 'View Books',
            'section.featured': 'Our Featured Books',
            'section.access': 'Quick Access',
            'form.email': 'Email',
            'form.password': 'Password',
            'form.loginBtn': 'Log In',
            'form.create': 'Create Account',
            'menu.categories_title': 'Categories',
            'cart.title': 'Your Cart',
            'cart.empty': 'Your cart is empty.',
            'cart.total': 'Total:',
            'cart.checkout': 'Checkout',
            'footer.brand': 'Book Store',
            'footer.mission': 'Our mission is to connect readers and stories, offering the best titles with the convenience of online shopping.',
            'footer.linksTitle': 'Useful Links',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Use',
            'footer.returns': 'Exchanges and Returns',
            'footer.devTitle': 'Development',
            'footer.devName': 'Project by: **Gabriel Cardoso**',
            'footer.linkedin': 'LinkedIn Profile',
            'footer.copy': '&copy; 2025 Book Store. All rights reserved. | Developed with <i class="fas fa-heart"></i>',
            'product.add_to_cart': 'Add to Cart',
            'product.remove': 'Remove',
            'promo.1': 'DAILY DEAL: 20% OFF on all Classics!',
            'promo.2': 'Free Shipping above $50.00. Shop now!',
            'promo.3': 'Get 1 free book on your first purchase!',
            'alert.checkout': 'Checkout complete! Total: ',
            'category.all': 'All Books',
            'category.action': 'Action & Adventure',
            'category.horror': 'Horror & Thriller',
            'category.fantasy': 'Epic Fantasy',
            'category.scifi': 'Science Fiction'
        }
    };

    function getLanguage() {
        const browserLang = navigator.language.toLowerCase().substring(0, 2);
        if (browserLang === 'pt') return 'pt';
        return 'en';
    }

    const currentLang = getLanguage();
    const texts = translations[currentLang];
    let currentCategory = 'all';

    // -------------------- DADOS MOCK COM 12 LIVROS E CAPAS ESTÁVEIS (PARA SIMULAÇÃO) --------------------
    const mockBooks = [
        // AÇÃO E AVENTURA
        { id: 1, name: "O Código Da Vinci", author: "Dan Brown", price: 31.90, imageUrl: "https://m.media-amazon.com/images/I/81D5xR02X7L._AC_UF1000,1000_QL80_.jpg", category: 'action' },
        { id: 7, name: "20.000 Léguas Submarinas", author: "Julio Verne", price: 45.00, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647248148i/57601614.jpg", category: 'action' },
        { id: 8, name: "Missão em Moscou", author: "Tom Clancy", price: 62.50, imageUrl: "https://m.media-amazon.com/images/I/81dG7e4Uf-L._AC_UF1000,1000_QL80_.jpg", category: 'action' },
        { id: 13, name: "A Identidade Bourne", author: "Robert Ludlum", price: 33.00, imageUrl: "https://m.media-amazon.com/images/I/81l8nJg3qTL._AC_UF1000,1000_QL80_.jpg", category: 'action' },

        // TERROR E SUSPENSE
        { id: 2, name: "O Iluminado", author: "Stephen King", price: 38.00, imageUrl: "https://m.media-amazon.com/images/I/713v9-y81NL._AC_UF1000,1000_QL80_.jpg", category: 'horror' },
        { id: 5, name: "O Silêncio dos Inocentes", author: "Thomas Harris", price: 35.00, imageUrl: "https://m.media-amazon.com/images/I/714wS2s0x8L._AC_UF1000,1000_QL80_.jpg", category: 'horror' },
        { id: 9, name: "A Entidade", author: "Shirley Jackson", price: 29.90, imageUrl: "https://m.media-amazon.com/images/I/71M2zT8Q-ML._AC_UF1000,1000_QL80_.jpg", category: 'horror' },
        { id: 14, name: "O Exorcista", author: "William Peter Blatty", price: 41.50, imageUrl: "https://m.media-amazon.com/images/I/81734tXw37L._AC_UF1000,1000_QL80_.jpg", category: 'horror' }, 
        
        // FANTASIA ÉPICA
        { id: 3, name: "O Hobbit", author: "J. R. R. Tolkien", price: 49.90, imageUrl: "https://m.media-amazon.com/images/I/71oD4oA8G1L._AC_UF1000,1000_QL80_.jpg", category: 'fantasy' },
        { id: 4, name: "Miss Peregrine", author: "Ransom Riggs", price: 42.50, imageUrl: "https://m.media-amazon.com/images/I/71lUvL9vGEL._AC_UF1000,1000_QL80_.jpg", category: 'fantasy' },
        { id: 10, name: "Nona a Noiva", author: "Tamsyn Muir", price: 58.00, imageUrl: "https://m.media-amazon.com/images/I/81t3u6h1S3L._AC_UF1000,1000_QL80_.jpg", category: 'fantasy' },
        
        // FICÇÃO CIENTÍFICA (NOVA CATEGORIA)
        { id: 6, name: "Duna", author: "Frank Herbert", price: 59.90, imageUrl: "https://m.media-amazon.com/images/I/71YtL1qPj0L._AC_UF1000,1000_QL80_.jpg", category: 'scifi' },
        { id: 11, name: "O Guia do Mochileiro", author: "Douglas Adams", price: 36.50, imageUrl: "https://m.media-amazon.com/images/I/81Vq4sD6zSL._AC_UF1000,1000_QL80_.jpg", category: 'scifi' },
        { id: 12, name: "Neuromancer", author: "William Gibson", price: 48.00, imageUrl: "https://m.media-amazon.com/images/I/71nC1mC5qWL._AC_UF1000,1000_QL80_.jpg", category: 'scifi' },
    ];

    // -------------------- VARIÁVEIS DO DOM --------------------
    const productsGrid = document.getElementById('products-grid');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartButton = document.getElementById('cart-button');
    const cartIconElement = document.querySelector('.cart-icon'); 
    const closeCartButton = document.getElementById('close-cart');
    const cartCountElement = document.getElementById('cart-count');
    const drawerCountElement = document.getElementById('drawer-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const menuButton = document.getElementById('menu-button');
    const categoryDrawer = document.getElementById('category-drawer');
    const closeMenuButton = document.getElementById('close-menu');
    const categoryList = document.getElementById('category-list');
    const filterButtonsContainer = document.getElementById('filter-buttons');

    let cart = []; 

    // -------------------- FUNÇÕES DE INTERNACIONALIZAÇÃO --------------------

    function translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (texts[key]) {
                if (key.includes('footer.copy')) {
                    element.innerHTML = texts[key];
                } else {
                    element.textContent = texts[key];
                }
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (texts[key]) {
                element.setAttribute('placeholder', texts[key]);
            }
        });
        document.documentElement.lang = currentLang;
        document.title = texts['title'];
    }

    // -------------------- PROMOÇÃO RANDÔMICA --------------------

    function displayRandomPromotion() {
        const promoBanner = document.getElementById('promo-banner');
        const promoKeys = ['promo.1', 'promo.2', 'promo.3'];
        const randomIndex = Math.floor(Math.random() * promoKeys.length);
        const randomKey = promoKeys[randomIndex];
        const promoText = texts[randomKey] || 'Promoção especial!';
        promoBanner.innerHTML = `<p>${promoText}</p>`;
    }


    // =========================================================================
    // -------------------- FUNÇÃO DE ANIMAÇÃO (FLY-TO-CART) -------------------
    // =========================================================================

    function animateToCart(bookImageElement) {
        const clone = bookImageElement.cloneNode(true);
        const startRect = bookImageElement.getBoundingClientRect();
        const endRect = cartIconElement.getBoundingClientRect();
        
        // Posição inicial do clone
        clone.classList.add('fly-to-cart-clone');
        clone.style.left = startRect.left + 'px';
        clone.style.top = startRect.top + 'px';
        clone.style.width = startRect.width + 'px';
        clone.style.height = startRect.height + 'px';
        
        document.body.appendChild(clone);
        document.body.classList.add('animating'); 
        
        void clone.offsetWidth; // Força reflow

        // Posição final da animação (Ícone do Carrinho)
        const cartX = endRect.left + endRect.width / 2 - 40; 
        const cartY = endRect.top + endRect.height / 2 - 40; 
        
        // Aplica a transformação
        clone.style.transform = `translate(${cartX - startRect.left}px, ${cartY - startRect.top}px) scale(0.2)`;
        clone.style.opacity = '0';
        
        // Remove o clone após a transição
        setTimeout(() => {
            clone.remove();
            document.body.classList.remove('animating');
        }, 700); 
    }

    // =========================================================================
    // -------------------- FUNÇÕES DE CATEGORIA E FILTRO -----------------
    // =========================================================================

    function filterProducts(category) {
        currentCategory = category;
        renderProducts(); 
        
        document.querySelectorAll('.filter-buttons button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });
        
        if (window.innerWidth < 768) {
            categoryDrawer.classList.remove('open');
        }
    }

    function getUniqueCategories() {
        const categories = mockBooks.map(book => book.category);
        return ['all', ...new Set(categories)]; 
    }

    function renderCategoryFilters() {
        const categories = getUniqueCategories();
        
        // 1. Renderiza no Menu Hamburguer (Mobile)
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const li = document.createElement('li');
            const categoryKey = `category.${category}`;
            const categoryName = texts[categoryKey] || category;
            
            li.innerHTML = `<a href="#vitrine" data-category="${category}">${categoryName}</a>`;
            li.addEventListener('click', (e) => {
                e.preventDefault();
                filterProducts(category);
            });
            categoryList.appendChild(li);
        });

        // 2. Renderiza nos Botões de Filtro (Desktop)
        filterButtonsContainer.innerHTML = '';
        categories.forEach(category => {
            const button = document.createElement('button');
            button.dataset.category = category;
            const categoryKey = `category.${category}`;
            button.textContent = texts[categoryKey] || category;
            
            if (category === currentCategory) {
                button.classList.add('active');
            }
            
            button.addEventListener('click', () => filterProducts(category));
            filterButtonsContainer.appendChild(button);
        });
    }

    // -------------------- FUNÇÕES DE RENDERIZAÇÃO E CARRINHO --------------------

    function renderProducts() {
        productsGrid.innerHTML = '';
        
        const filteredBooks = mockBooks.filter(book => 
            currentCategory === 'all' || book.category === currentCategory
        );

        if (filteredBooks.length === 0) {
            productsGrid.innerHTML = `<p style="grid-column: 1 / -1; font-style: italic; color: #6c757d;">Nenhum livro encontrado nesta categoria.</p>`;
            return;
        }

        filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.setAttribute('data-id', book.id);
            bookCard.innerHTML = `
                <img src="${book.imageUrl}" alt="Capa do livro: ${book.name}" class="book-image" loading="lazy">
                <h3>${book.name}</h3>
                <p class="author">${book.author}</p>
                <p class="price">R$ ${book.price.toFixed(2).replace('.', ',')}</p>
                <button class="btn add-to-cart-btn" data-id="${book.id}">${texts['product.add_to_cart']}</button>
            `;
            productsGrid.appendChild(bookCard);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const bookId = parseInt(e.target.dataset.id);
                // Captura a imagem para a animação
                const bookCard = e.target.closest('.book-card');
                const bookImage = bookCard.querySelector('.book-image');
                
                addToCart(bookId, bookImage); 
            });
        });
    }

    function renderCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `<p class="empty-cart-message">${texts['cart.empty']}</p>`;
            checkoutBtn.disabled = true;
        } else {
            checkoutBtn.disabled = false;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <div class="item-details">
                        <p class="item-name">${item.name}</p>
                        <p>Qtd: ${item.quantity} | R$ ${(item.price.toFixed(2)).replace('.', ',')}</p>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">${texts['product.remove']}</button>
                `;
                cartItemsList.appendChild(cartItemElement);
            });
        }

        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountElement.textContent = totalItems;
        drawerCountElement.textContent = totalItems;
        cartTotalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const bookId = parseInt(e.target.dataset.id);
                removeFromCart(bookId);
            });
        });
    }

    function addToCart(bookId, bookImage = null) {
        const book = mockBooks.find(b => b.id === bookId);
        if (!book) return;
        const existingItem = cart.find(item => item.id === bookId);

        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push({ ...book, quantity: 1 });
        }
        
        if (bookImage) {
            animateToCart(bookImage); // Inicia a animação
        }
        
        renderCart();
        if (window.innerWidth < 768) {
             cartDrawer.classList.add('open');
        }
    }

    function removeFromCart(bookId) {
        const itemIndex = cart.findIndex(item => item.id === bookId);
        if (itemIndex !== -1) {
            const item = cart[itemIndex];
            if (item.quantity > 1) {
                item.quantity -= 1; 
            } else {
                cart.splice(itemIndex, 1); 
            }
        }
        renderCart();
    }

    // -------------------- EVENT LISTENERS --------------------

    menuButton.addEventListener('click', () => {
        categoryDrawer.classList.add('open');
    });

    closeMenuButton.addEventListener('click', () => {
        categoryDrawer.classList.remove('open');
    });

    cartButton.addEventListener('click', () => {
        cartDrawer.classList.toggle('open');
    });

    closeCartButton.addEventListener('click', () => {
        cartDrawer.classList.remove('open');
    });

    checkoutBtn.addEventListener('click', () => {
        alert(texts['alert.checkout'] + cartTotalElement.textContent + '.'); 
        cart = []; 
        renderCart();
        cartDrawer.classList.remove('open');
    });

    // -------------------- INICIALIZAÇÃO --------------------
    
    translatePage();
    renderCategoryFilters(); 
    renderProducts(); 
    renderCart();
    displayRandomPromotion();

});
