import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import './App.css';

class App extends Component {
  state = {
    nome: 'Andrea Gherardi',
    ruolo: 'Chief Technical Officer',
    email: 'andrea.gherardi',
    telefono: '328 88 76 938',
    telefonoSenzaSpazi: '3288876938',
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

      {/* <div>
        <label htmlFor="email">Email </label>
        <input
          id="email"
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        @mirror.it
      </div> */}

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
            /\d/,
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

  handleNomeChange = (e) => {
    const nome = e.target.value;
    const nomeArray = nome.split(' ');

    const newState = { nome };

    if (nomeArray.length > 1) {
      newState.email = `${nomeArray[0].toLowerCase()}.${nomeArray[1].toLowerCase()}`;
    }

    this.setState(newState);
  };

  handleRuoloChange = (e) => {
    this.setState({ ruolo: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleTelefonoChange = (e) => {
    this.setState({
      telefono: e.target.value,
      telefonoSenzaSpazi: e.target.value.split(' ').join(''),
    });
  };

  getFirma = () => ({
    __html: `
    <table
      style="
        direction: ltr;
        border-radius: 0;
        moz-border-radius: 0;
        khtml-border-radius: 0;
        o-border-radius: 0;
        webkit-border-radius: 0;
        ms-border-radius: 0;
      "
      class="main_html"
    >
      <tbody>
        <tr>
          <td style="padding-bottom: 20px">
            --
          </td>
        </tr>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style="line-height: 0; height: 16px"></td>
                </tr>
              </tbody>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="ws-tpl"
              style="font-family: Arial; line-height: 1.15; color: #000"
            >
              <tbody>
                <tr>
                  <td style="vertical-align: top; padding-right: 14px">
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      class="ws-tpl-photo"
                      style="width: 65px"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/logo.png"
                              height="61.438356164383556"
                              width="65"
                              style="
                                width: 65px;
                                vertical-align: initial;
                                border-radius: 0;
                                moz-border-radius: 0;
                                khtml-border-radius: 0;
                                o-border-radius: 0;
                                webkit-border-radius: 0;
                                ms-border-radius: 0;
                                display: block;
                                height: 61.438356164383556px;
                              "
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style="padding-left: 14px; vertical-align: top" valign="top">
                    <table cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td style="line-height: 1; padding-bottom: 8px">
                            <span
                              class="ws-tpl-name"
                              style="
                                font-family: Arial;
                                text-transform: initial;
                                font-weight: bold;
                              "
                            >
                              <span
                                style="
                                  font-size: 15.600000000000001px;
                                  font-weight: bold;
                                "
                                data-acs="name"
                              >
                                ${this.state.nome}
                              </span> </span
                            ><br />
                            <span
                              class="ws-tpl-title"
                              style="
                                font-size: 12px;
                                letter-spacing: 0px;
                                font-family: Arial;
                                text-transform: initial;
                              "
                              data-acs="title"
                            >
                              ${this.state.ruolo}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style="line-height: 0">
                            <table cellpadding="0" cellspacing="0">
                              <tbody>
                                <tr>
                                  <td>
                                    <table cellpadding="0" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              line-height: 0%;
                                              padding-bottom: 0px;
                                            "
                                          >
                                            <table
                                              class="ws-tpl-mobile"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                line-height: 14px;
                                                font-size: 12px;
                                                font-family: Arial;
                                              "
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    style="
                                                      color-scheme: light only;
                                                      font-family: Arial;
                                                      font-size: 12px;
                                                    "
                                                  >
                                                    <span
                                                      class="ws-tpl-name"
                                                      style="
                                                        font-family: Arial;
                                                        text-transform: initial;
                                                        font-weight: bold;
                                                        font-size: 11px;
                                                      "
                                                    >
                                                      M:
                                                    </span>
                                                    <a
                                                      href="tel:+39${this.state.telefonoSenzaSpazi}"
                                                      target="_blank"
                                                      style="
                                                        color-scheme: light only;
                                                        text-decoration: none;
                                                        font-size: 12px;
                                                        font-family: Arial;
                                                      "
                                                    >
                                                      <span
                                                        data-acs="mobile"
                                                        style="
                                                          line-height: 1.2;
                                                          color-scheme: light only;
                                                          color: #212121;
                                                          font-family: Arial;
                                                          white-space: nowrap;
                                                          font-size: 11px;
                                                        "
                                                      >
                                                        +39 ${this.state.telefono}
                                                      </span>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            style="
                                              line-height: 0%;
                                              padding-bottom: 0px;
                                            "
                                          >
                                            <table
                                              class="ws-tpl-phone"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                line-height: 14px;
                                                font-size: 12px;
                                                font-family: Arial;
                                              "
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    style="
                                                      color-scheme: light only;
                                                      font-family: Arial;
                                                      font-size: 12px;
                                                    "
                                                  >
                                                    <span
                                                      class="ws-tpl-name"
                                                      style="
                                                        font-family: Arial;
                                                        text-transform: initial;
                                                        font-weight: bold;
                                                        font-size: 11px;
                                                      "
                                                    >
                                                      O:
                                                    </span>
                                                    <a
                                                      href="tel:+39 055 97 53 445"
                                                      target="_blank"
                                                      style="
                                                        color-scheme: light only;
                                                        text-decoration: none;
                                                        font-size: 11px;
                                                        font-family: Arial;
                                                      "
                                                    >
                                                      <span
                                                        data-acs="phone"
                                                        style="
                                                          line-height: 1.2;
                                                          color-scheme: light only;
                                                          color: #212121;
                                                          font-family: Arial;
                                                          white-space: nowrap;
                                                          font-size: 11px;
                                                        "
                                                      >
                                                        +39 055 97 53 445
                                                      </span>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <table cellpadding="0" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              line-height: 0%;
                                            "
                                          >
                                            <table
                                              class="ws-tpl-website"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                line-height: 14px;
                                                font-size: 12px;
                                                font-family: Arial;
                                              "
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    style="
                                                      color-scheme: light only;
                                                      font-family: Arial;
                                                      font-size: 12px;
                                                    "
                                                  >
                                                    <a
                                                      href="http://www.mirror.it"
                                                      target="_blank"
                                                      style="
                                                        color-scheme: light only;
                                                        text-decoration: none;
                                                        font-size: 11px;
                                                        font-family: Arial;
                                                      "
                                                    >
                                                      <span
                                                        data-acs="website"
                                                        style="
                                                          line-height: 1.2;
                                                          color-scheme: light only;
                                                          color: #c30081;
                                                          font-family: Arial;
                                                          white-space: nowrap;
                                                          font-size: 11px;
                                                        "
                                                      >
                                                        www.mirror.it
                                                      </span>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top: 10px">
                            <table
                              class="ws-tpl-social"
                              cellpadding="0"
                              cellspacing="0"
                              style="width: 100%"
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="left"
                                            style="
                                              padding-right: 6px;
                                              text-align: center;
                                              padding-top: 0;
                                            "
                                          >
                                            <a
                                              href="http://instagram.com/mirrordigitalagency"
                                              target="_blank"
                                              style="
                                                font-size: 11px;
                                                color: #444;
                                                text-decoration: none;
                                              "
                                            >
                                              <img
                                                width="16"
                                                height="16"
                                                src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/instagram-icon.png"
                                                style="float: left; border: none"
                                                border="0"
                                              />
                                            </a>
                                          </td>
                                          <td
                                            align="left"
                                            style="
                                              padding-right: 6px;
                                              text-align: center;
                                              padding-top: 0;
                                            "
                                          >
                                            <a
                                              href="http://facebook.com/mirrordigitalagency"
                                              target="_blank"
                                              style="
                                                font-size: 11px;
                                                color: #444;
                                                text-decoration: none;
                                              "
                                            >
                                              <img
                                                width="16"
                                                height="16"
                                                src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/fb-icon.png"
                                                style="float: left; border: none"
                                                border="0"
                                              />
                                            </a>
                                          </td>
                                          <td
                                            align="left"
                                            style="
                                              padding-right: 6px;
                                              text-align: center;
                                              padding-top: 0;
                                            "
                                          >
                                            <a
                                              href="http://vimeo.com/mirrordigitalagency"
                                              target="_blank"
                                              style="
                                                font-size: 11px;
                                                color: #444;
                                                text-decoration: none;
                                              "
                                            >
                                              <img
                                                width="16"
                                                height="16"
                                                src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/vimeo-icon.png"
                                                style="float: left; border: none"
                                                border="0"
                                              />
                                            </a>
                                          </td>
                                          <td
                                            align="left"
                                            style="
                                              padding-right: 6px;
                                              text-align: center;
                                              padding-top: 0;
                                            "
                                          >
                                            <a
                                              href="http://us.linkedin.com/in/mirrordigitalagency"
                                              target="_blank"
                                              style="
                                                font-size: 11px;
                                                color: #444;
                                                text-decoration: none;
                                              "
                                            >
                                              <img
                                                width="16"
                                                height="16"
                                                src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/linkedin-icon.png"
                                                style="float: left; border: none"
                                                border="0"
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr>
                  <td style="line-height: 0"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top: 12px">
            <div style="color: #999999; font-size: 9px;">Avviso di riservatezza: questo messaggio può contenere informazioni riservate. Se non sei il destinatario previsto, ti preghiamo di avvisare immediatamente il mittente tramite e-mail di risposta ed eliminare questo messaggio e gli eventuali allegati senza conservarne una copia. Qualsiasi utilizzo non autorizzato del contenuto di questo messaggio può costituire una violazione del vostro dovere di rispettare la riservatezza della corrispondenza tra altre persone, ai sensi dell'art. 616 cp, nonché violazione del D.lgs. n. 196/2003 (legge sulla privacy) e può esporre il responsabile a sanzioni civili e/o penali, e può costituire più grave reato.</div>
          </td>
        </tr>
      </tbody>
    </table>

    `,
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
