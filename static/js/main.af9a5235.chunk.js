(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    15: function(n, t, e) {},
    17: function(n, t, e) {},
    19: function(n, t, e) {
      'use strict';
      e.r(t);
      var a = e(0),
        l = e.n(a),
        i = e(2),
        o = e.n(i),
        r = (e(15), e(3)),
        d = e(4),
        s = e(7),
        c = e(5),
        p = e(8),
        m = e(6),
        g = e.n(m),
        h = (e(17),
        (function(n) {
          function t() {
            var n, e;
            Object(r.a)(this, t);
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
            return (
              ((e = Object(s.a)(this, (n = Object(c.a)(t)).call.apply(n, [this].concat(i)))).state = {
                nome: 'Andrea Gherardi',
                ruolo: 'Chief Technical Officer',
                email: 'andrea.gherardi',
                telefono: '328 88 76 938',
              }),
              (e.copy = function() {
                window.getSelection().selectAllChildren(document.querySelector('.Output')),
                  document.execCommand('copy'),
                  window.getSelection().removeAllRanges(),
                  alert('Copiato! Ora vai su Gmail, MA NON USARE CHROME!!!');
              }),
              (e.step1 = function() {
                return l.a.createElement(
                  'div',
                  { className: 'Step Step--1' },
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement('label', { htmlFor: 'nome' }, 'Nome '),
                    l.a.createElement('input', {
                      id: 'nome',
                      type: 'text',
                      value: e.state.nome,
                      onChange: e.handleNomeChange,
                    })
                  ),
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement('label', { htmlFor: 'ruolo' }, 'Ruolo '),
                    l.a.createElement('input', {
                      id: 'ruolo',
                      type: 'text',
                      value: e.state.ruolo,
                      onChange: e.handleRuoloChange,
                    })
                  ),
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement('label', { htmlFor: 'telefono' }, 'Telefono '),
                    l.a.createElement(g.a, {
                      mask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
                      onChange: e.handleTelefonoChange,
                      id: 'telefono',
                      value: e.state.telefono,
                    })
                  )
                );
              }),
              (e.step2 = function() {
                return l.a.createElement(
                  'div',
                  { className: 'Step Step--2' },
                  l.a.createElement('div', { className: 'Output', dangerouslySetInnerHTML: e.getFirma() })
                );
              }),
              (e.handleNomeChange = function(n) {
                e.setState({ nome: n.target.value });
              }),
              (e.handleRuoloChange = function(n) {
                e.setState({ ruolo: n.target.value });
              }),
              (e.handleEmailChange = function(n) {
                e.setState({ email: n.target.value });
              }),
              (e.handleTelefonoChange = function(n) {
                e.setState({ telefono: n.target.value });
              }),
              (e.getFirma = function() {
                return {
                  __html: '<table style="\n      direction: ltr;\n      border-radius: 0;\n      moz-border-radius: 0;\n      khtml-border-radius: 0;\n      o-border-radius: 0;\n      webkit-border-radius: 0;\n      ms-border-radius: 0;\n    " class="main_html">\n    <tbody>\n      <tr>\n        <td style="padding-bottom: 20px">\n          --\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <table cellpadding="0" cellspacing="0" border="0" width="100%">\n            <tbody>\n              <tr>\n                <td style="line-height: 0; height: 16px"></td>\n              </tr>\n            </tbody>\n          </table>\n          <table cellpadding="0" cellspacing="0" class="ws-tpl" style="font-family: Arial; line-height: 1.15; color: #000">\n            <tbody>\n              <tr>\n                <td style="vertical-align: top; padding-right: 14px">\n                  <table cellpadding="0" cellspacing="0" class="ws-tpl-photo" style="width: 65px">\n                    <tbody>\n                      <tr>\n                        <td>\n                          <img src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/logo.png" height="61.438356164383556" width="65" style="\n                              width: 65px;\n                              vertical-align: initial;\n                              border-radius: 0;\n                              moz-border-radius: 0;\n                              khtml-border-radius: 0;\n                              o-border-radius: 0;\n                              webkit-border-radius: 0;\n                              ms-border-radius: 0;\n                              display: block;\n                              height: 61.438356164383556px;\n                            ">\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </td>\n                <td style="padding-left: 0; vertical-align: top" valign="top">\n                  <table cellpadding="0" cellspacing="0">\n                    <tbody>\n                      <tr>\n                        <td style="line-height: 1; padding-bottom: 8px">\n                          <span class="ws-tpl-name" style="\n                              font-family: Arial;\n                              text-transform: initial;\n                              font-weight: bold;\n                            ">\n                            <span style="\n                                font-size: 15.600000000000001px;\n                                font-weight: bold;\n                              " data-acs="name">\n                              '
                    .concat(
                      e.state.nome,
                      '\n                            </span> </span><br>\n                          <span class="ws-tpl-title" style="\n                              font-size: 12px;\n                              letter-spacing: 0px;\n                              font-family: Arial;\n                              text-transform: initial;\n                            " data-acs="title">\n                            '
                    )
                    .concat(
                      e.state.ruolo,
                      '\n                          </span>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style="line-height: 0">\n                          <table cellpadding="0" cellspacing="0">\n                            <tbody>\n                              <tr>\n                                <td>\n                                  <table cellpadding="0" cellspacing="0">\n                                    <tbody>\n                                      <tr>\n                                        <td style="\n                                            line-height: 0%;\n                                            padding-bottom: 0px;\n                                          ">\n                                          <table class="ws-tpl-mobile" cellpadding="0" cellspacing="0" style="\n                                              width: 100%;\n                                              line-height: 14px;\n                                              font-size: 12px;\n                                              font-family: Arial;\n                                            ">\n                                            <tbody>\n                                              <tr>\n                                                <td style="\n                                                    color-scheme: light only;\n                                                    font-family: Arial;\n                                                    font-size: 12px;\n                                                  ">\n                                                  <span class="ws-tpl-name" style="\n                                                      font-family: Arial;\n                                                      text-transform: initial;\n                                                      font-weight: bold;\n                                                      font-size: 11px;\n                                                    ">\n                                                    M:\n                                                  </span>\n                                                  <a href="tel:+39'
                    )
                    .concat(
                      e.state.telefono,
                      '" target="_blank" style="\n                                                      color-scheme: light only;\n                                                      text-decoration: none;\n                                                      font-size: 12px;\n                                                      font-family: Arial;\n                                                    ">\n                                                    <span data-acs="mobile" style="\n                                                        line-height: 1.2;\n                                                        color-scheme: light only;\n                                                        color: #212121;\n                                                        font-family: Arial;\n                                                        white-space: nowrap;\n                                                        font-size: 11px;\n                                                      ">\n                                                      +39 '
                    )
                    .concat(
                      e.state.telefono,
                      '\n                                                    </span>\n                                                  </a>\n                                                </td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                      <tr>\n                                        <td style="\n                                            line-height: 0%;\n                                            padding-bottom: 0px;\n                                          ">\n                                          <table class="ws-tpl-phone" cellpadding="0" cellspacing="0" style="\n                                              width: 100%;\n                                              line-height: 14px;\n                                              font-size: 12px;\n                                              font-family: Arial;\n                                            ">\n                                            <tbody>\n                                              <tr>\n                                                <td style="\n                                                    color-scheme: light only;\n                                                    font-family: Arial;\n                                                    font-size: 12px;\n                                                  ">\n                                                  <span class="ws-tpl-name" style="\n                                                      font-family: Arial;\n                                                      text-transform: initial;\n                                                      font-weight: bold;\n                                                      font-size: 11px;\n                                                    ">\n                                                    O:\n                                                  </span>\n                                                  <a href="tel:+39 055 49 39 136" target="_blank" style="\n                                                      color-scheme: light only;\n                                                      text-decoration: none;\n                                                      font-size: 11px;\n                                                      font-family: Arial;\n                                                    ">\n                                                    <span data-acs="phone" style="\n                                                        line-height: 1.2;\n                                                        color-scheme: light only;\n                                                        color: #212121;\n                                                        font-family: Arial;\n                                                        white-space: nowrap;\n                                                        font-size: 11px;\n                                                      ">\n                                                      +39 055 49 39 136\n                                                    </span>\n                                                  </a>\n                                                </td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <table cellpadding="0" cellspacing="0">\n                                    <tbody>\n                                      <tr>\n                                        <td style="\n                                            line-height: 0%;\n                                          ">\n                                          <table class="ws-tpl-website" cellpadding="0" cellspacing="0" style="\n                                              width: 100%;\n                                              line-height: 14px;\n                                              font-size: 12px;\n                                              font-family: Arial;\n                                            ">\n                                            <tbody>\n                                              <tr>\n                                                <td style="\n                                                    color-scheme: light only;\n                                                    font-family: Arial;\n                                                    font-size: 12px;\n                                                  ">\n                                                  <a href="http://www.mirror.it" target="_blank" style="\n                                                      color-scheme: light only;\n                                                      text-decoration: none;\n                                                      font-size: 11px;\n                                                      font-family: Arial;\n                                                    ">\n                                                    <span data-acs="website" style="\n                                                        line-height: 1.2;\n                                                        color-scheme: light only;\n                                                        color: #c30081;\n                                                        font-family: Arial;\n                                                        white-space: nowrap;\n                                                        font-size: 11px;\n                                                      ">\n                                                      www.mirror.it\n                                                    </span>\n                                                  </a>\n                                                </td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style="padding-top: 10px">\n                          <table class="ws-tpl-social" cellpadding="0" cellspacing="0" style="width: 100%">\n                            <tbody>\n                              <tr>\n                                <td>\n                                  <table border="0" cellpadding="0" cellspacing="0">\n                                    <tbody>\n                                      <tr>\n                                        <td align="left" style="\n                                            padding-right: 6px;\n                                            text-align: center;\n                                            padding-top: 0;\n                                          ">\n                                          <a href="http://instagram.com/mirrordigitalagency" target="_blank" style="\n                                              font-size: 11px;\n                                              color: #444;\n                                              text-decoration: none;\n                                            ">\n                                            <img width="16" height="16" src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/instagram-icon.png" style="float: left; border: none" border="0">\n                                          </a>\n                                        </td>\n                                        <td align="left" style="\n                                            padding-right: 6px;\n                                            text-align: center;\n                                            padding-top: 0;\n                                          ">\n                                          <a href="http://facebook.com/mirrordigitalagency" target="_blank" style="\n                                              font-size: 11px;\n                                              color: #444;\n                                              text-decoration: none;\n                                            ">\n                                            <img width="16" height="16" src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/fb-icon.png" style="float: left; border: none" border="0">\n                                          </a>\n                                        </td>\n                                        <td align="left" style="\n                                            padding-right: 6px;\n                                            text-align: center;\n                                            padding-top: 0;\n                                          ">\n                                          <a href="http://vimeo.com/mirrordigitalagency" target="_blank" style="\n                                              font-size: 11px;\n                                              color: #444;\n                                              text-decoration: none;\n                                            ">\n                                            <img width="16" height="16" src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/vimeo-icon.png" style="float: left; border: none" border="0">\n                                          </a>\n                                        </td>\n                                        <td align="left" style="\n                                            padding-right: 6px;\n                                            text-align: center;\n                                            padding-top: 0;\n                                          ">\n                                          <a href="https://www.linkedin.com/company/mirrordigitalagency" target="_blank" style="\n                                              font-size: 11px;\n                                              color: #444;\n                                              text-decoration: none;\n                                            ">\n                                            <img width="16" height="16" src="http://gest.mirrorprod.com/wp-content/uploads/2021/06/linkedin-icon.png" style="float: left; border: none" border="0">\n                                          </a>\n                                        </td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table cellpadding="0" cellspacing="0" border="0">\n            <tbody>\n              <tr>\n                <td style="line-height: 0"></td>\n              </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n      <tr>\n        <td style="padding-top: 12px">\n          <div style="color: #999999; font-size: 9px; max-width: 950px;">Avviso di riservatezza: questo messaggio pu\xf2 contenere informazioni riservate. Se non sei il destinatario previsto, ti preghiamo di avvisare immediatamente il mittente tramite e-mail di risposta ed eliminare questo messaggio e gli eventuali allegati senza conservarne una copia. Qualsiasi utilizzo non autorizzato del contenuto di questo messaggio pu\xf2 costituire una violazione del vostro dovere di rispettare la riservatezza della corrispondenza tra altre persone, ai sensi dell\'art. 616 c.p., nonch\xe9 violazione del D.lgs. n. 196/2003 (Codice in materia di protezione dei dati personali) e pu\xf2 esporre il responsabile a sanzioni civili e/o penali, e pu\xf2 costituire pi\xf9 grave reato.</div>\n        </td>\n      </tr>\n    </tbody>\n  </table>'
                    ),
                };
              }),
              e
            );
          }
          return (
            Object(p.a)(t, n),
            Object(d.a)(t, [
              {
                key: 'render',
                value: function() {
                  return l.a.createElement(
                    'div',
                    { className: 'App' },
                    l.a.createElement(
                      'div',
                      { className: 'Istruzioni' },
                      l.a.createElement(
                        'ol',
                        null,
                        l.a.createElement('li', null, 'Metti i tuoi dati nel form a sinistra'),
                        l.a.createElement('li', null, "Controlla nell'anteprima a destra che tutto sia a posto"),
                        l.a.createElement(
                          'li',
                          null,
                          'Clicca il bottone COPIA in fondo alla pagina. Questo copier\xe0 il contenuto della nuova firma negli appunti'
                        ),
                        l.a.createElement('li', null, 'Vai su Gmail usando un browser qualsiasi a parte Chrome'),
                        l.a.createElement('li', null, 'Vai nelle impostazioni di Gmail e cerca la sezione "Firma"'),
                        l.a.createElement(
                          'li',
                          null,
                          'Svuota il contenuto della firma e fai CTRL + V (o CMD + V su Mac)'
                        ),
                        l.a.createElement('li', null, 'Salva le impostazioni')
                      )
                    ),
                    l.a.createElement('div', { className: 'StepGrid' }, this.step1(), this.step2()),
                    l.a.createElement(
                      'div',
                      { className: 'ButtonContainer' },
                      l.a.createElement('button', { onClick: this.copy }, 'Copia')
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component));
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      o.a.render(l.a.createElement(h, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(n) {
            n.unregister();
          });
    },
    9: function(n, t, e) {
      n.exports = e(19);
    },
  },
  [[9, 2, 1]],
]);
//# sourceMappingURL=main.af9a5235.chunk.js.map
