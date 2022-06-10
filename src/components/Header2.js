import "./Header2.css"


export default function Header2() {
    return (
        <header>
            <div class="header-banner">
                <h1>Sabios Guias Intérpretes</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/all-routes">Rutas </a></li>
                    <li><a type="application/rss+xml" href="/rss-file">RSS</a></li>
                    <li><a href="/route-detail/4">Jardín Canario</a></li>
                    <li><a href="/route-detail/6">Azuaje</a></li>
                </ul>
            </nav>
        </header>
    );
}