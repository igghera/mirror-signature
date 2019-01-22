import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import './App.css';

class App extends Component {
  state = {
    nome: 'Tommaso Valente',
    ruolo: 'Co-Founder & Client Director',
    email: 'tommaso',
    telefono: '347 74 62 355'
  };

  copy = () => {
    window.getSelection().selectAllChildren(document.querySelector('.Output'));
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Copiato! Ora vai su Gmail');
  };

  step1 = () => (
    <div className="Step Step--1">
      <div>
        <label htmlFor="nome">Nome </label>
        <input
          id="nome"
          type="text"
          value={this.state.nome}
          onChange={this.handleNomeChange}
        />
      </div>

      <div>
        <label htmlFor="ruolo">Ruolo </label>
        <input
          id="ruolo"
          type="text"
          value={this.state.ruolo}
          onChange={this.handleRuoloChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email </label>
        <input
          id="email"
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="telefono">Telefono </label>

        <MaskedInput
          mask={[
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/
          ]}
          onChange={this.handleTelefonoChange}
          id="telefono"
          value={this.state.telefono}
        />
      </div>
    </div>
  );

  step2 = () => (
    <div className="Step Step--2">
      <div className="Output" dangerouslySetInnerHTML={this.getFirma()} />
    </div>
  );

  handleNomeChange = e => {
    this.setState({ nome: e.target.value });
  };

  handleRuoloChange = e => {
    this.setState({ ruolo: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleTelefonoChange = e => {
    this.setState({ telefono: e.target.value });
  };

  getFirma = () => ({
    __html: `<body>
        <br /> -- <br /><br />
        <div
          class="container"
          style=" position:relative; width:285px; height:auto;"
        >
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700"
            rel="stylesheet"
          />
          <div
            class="logo"
            style=" float:left; cursor:pointer; height:115px; width:70px;"
          >
            
            <a href="http://mirrorprod.com">
              
              <img
                src="http://materiale.mirrorprod.com/email/immagini/logo.png"
                alt="logo"
                height="55px"
                width="58px"
              />
            </a>
          </div>
          <div
            class="text"
            style="height: auto; width: 100; position:absolute; left:70px; width: auto; "
          >
            <div style="font-family: 'Montserrat', sans-serif; font-weight:700; line-height:15px; color:#231f20; font-size:16px;">
              
              ${this.state.nome}
            </div>
            <div
              class="italic"
              style="font-family: 'Montserrat', sans-serif; font-weight:400; line-height:15px; color:#231f20; font-size:12px; margin-bottom: 9px;"
            >
              
              ${this.state.ruolo}
            </div>
            <div
              style="font-family: 'Montserrat', sans-serif; ; font-weight:700; line-height:14px; color:#231f20; font-size:10px;"
            >
              
              M:
              <a
                href="tel:+39${this.state.telefono}"
                target="_blank"
                style="text-decoration:none; line-height:14px; color:#231f20; font-size:10px; font-weight:400;"
              >
                +39 ${this.state.telefono}
              </a>
            </div>
            <div
              style="font-family: 'Montserrat', sans-serif; ; font-weight:700; line-height:14px; color:#231f20; font-size:10px;"
            >
              O:
              <a
                href="tel:+390559753445"
                target="_blank"
                style="text-decoration:none; line-height:14px; color:#231f20; font-size:10px; font-weight:400;"
              >
                +39 055 97 53 445
              </a>
              <div style="font-family: 'Montserrat', sans-serif;">
                
                <a
                  href="mailto:${this.state.email}@mirrorprod.com"
                  target="_blank"
                  style="text-decoration:none; line-height:14px; color:#231f20; font-size:10px;"
                >
                  
                  ${this.state.email}@mirrorprod.com
                </a>
              </div>
              <div style="font-family: 'Montserrat', sans-serif;">
                
                <a
                  href="http://www.mirrorprod.com"
                  target="_blank"
                  style="text-decoration:none; line-height:14px; color:#c30081; font-size:10px;"
                >
                  
                  www.mirrorprod.com
                </a>
              </div>
              <div class="logo-social-1" style="margin-top:2px;">
                <a
                  href="https://www.instagram.com/mirrorprod"
                  target="_blank"
                  title="Mirror Prod. Instagram page"
                  style="text-decoration:none;"
                >
                  <img
                    src="http://materiale.mirrorprod.com/email/immagini/icons/instagram-icon.png"
                    alt="instagram icon"
                    height="17px"
                    width="17px"
                    style="margin-top:0px;padding-right:12px;"
                  />
                </a>
                <a
                  href="https://www.facebook.com/mirrorprod"
                  target="_blank"
                  title="Mirror Prod. Facebook page"
                  target="_blank"
                  style="text-decoration:none;"
                >
                  <img
                    src="http://materiale.mirrorprod.com/email/immagini/icons/fb-icon.png"
                    alt="fb-icon"
                    height="17px"
                    width="17px"
                    style="margin-top:0px;padding-right:12px;"
                  />
                </a>
                <a
                  href="https://www.vimeo.com/mirrorprod"
                  target="_blank"
                  title="Mirror Prod. Vimeo page"
                  style="text-decoration:none; margin-top:0px;"
                >
                  
                  <img
                    src="http://materiale.mirrorprod.com/email/immagini/icons/vimeo-icon.png"
                    alt="vimeo-icon"
                    height="17px"
                    width="17px"
                    style="margin-top:0px;padding-right:12px;"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/mirror-production/"
                  target="_blank"
                  title="Mirror Prod. Linkedin Page"
                  style="text-decoration:none; margin-top:0px;"
                >
                  
                  <img
                    src="http://materiale.mirrorprod.com/email/immagini/icons/linkedin-icon.png"
                    alt="linkedin-icon"
                    height="17px"
                    width="17px"
                    style="margin-top:0px;padding-right:0px;"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </body>`
  });

  render() {
    return (
      <div className="App">
        <div className="Istruzioni">
          <ol>
            <li>Metti i tuoi dati nel form a sinistra</li>
            <li>Controlla nell'anteprima a destra che tutto sia a posto</li>
            <li>
              Clicca il bottone COPIA in fondo alla pagina. Questo copierà il
              contenuto della nuova firma negli appunti
            </li>
            <li>Vai su Gmail usando un browser qualsiasi a parte Chrome</li>
            <li>Vai nelle impostazioni di Gmail e cerca la sezione "Firma"</li>
            <li>
              Svuota il contenuto della firma e fai CTRL + V (o CMD + V su Mac)
            </li>
            <li>Salva le impostazioni</li>
          </ol>
        </div>

        <div className="StepGrid">
          {this.step1()}
          {this.step2()}
        </div>

        <div className="ButtonContainer">
          <button onClick={this.copy}>Copia</button>
        </div>
      </div>
    );
  }
}

export default App;
