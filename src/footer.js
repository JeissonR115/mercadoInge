
export const createFooter = (parent = document.querySelector('footer')) => {
    if (parent) {
        parent.innerHTML = `
        <div class="footer-line"></div>
        <div class="footer-wrapper">
            <section class="footer-top">
                <div class="footer-headline">
                    <h2>Super Mercado Ingenieros</h2>
                    <p>
                        Si necesita ayuda para resolver alguna
                        <br>
                        inquietud no dudes en comunicarte con nosotros.
                    </p>
                </div>
                <div class="footer-subscribe">
                    <input type="email" spellcheck="false" placeholder="Ingresa tu correo">
                    <button>
                        Enviar
                    </button>
                </div>
            </section>
            <div class="footer-columns">
                <section class="footer-logo">
                    <img class="logo" src="../pictures/logo/svg/logo_oscuro.svg" alt="">
                </section>
                <section>
                    <h3>Contactos</h3>
                    <ul>
                        <li>
                            <a href="#" title="API">Celular: +57 3149875435</a>
                        </li>
                        <li>
                            <a href="#" title="Pricing">Telefono: 601 623269</a>
                        </li>
                        <li>
                            <a href="#" title="Documentation">Correo: s_mercadoingenieros.2023@gmail.com</a>
                        </li>
                        <li>
                            <a href="#" title="Release Notes">Dirección: Dg.40a#15-58, Teusaquillo, Bogotá</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Repositorios</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/JeissonR115/Mercado" title="GitHub">
                                <img src="../icons/github.svg" alt='GitHub'> Repositorio java
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/JeissonR115/mercadoInge" title="GitHub">
                                <img src="../icons/github.svg" alt='GitHub'> Repositorio web
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="footer-bottom">
                <small>© Super Mercado Ingenieros Ltd. <span id="year"></span>, Derechos reservados</small>
            </div>
        </div>
    `;
    }

}

