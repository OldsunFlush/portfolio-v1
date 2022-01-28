<?php  
    define( 'MAIL_TO', /* >>>>> */'pierre.prez2@gmail.com'/* <<<<< */ );  //ajouter votre courriel
    define( 'MAIL_NAME', '' ); // valeur par défaut 
    define( 'MAIL_FROM', '' ); // valeur par défaut  
    define( 'MAIL_OBJECT', '' ); // valeur par défaut  
    define( 'MAIL_MESSAGE', '' ); // valeur par défaut
    
    header('Content-type: text/html; charset=utf-8');

    $mailSent = false; // drapeau qui aiguille l'affichage du formulaire OU du récapitulatif  
    $errors = array(); // tableau des erreurs de saisie  

    if( filter_has_var( INPUT_POST, 'send' ) ) // le formulaire a été soumis avec le bouton [Envoyer]  
    {  
        $from = filter_input( INPUT_POST, 'from', FILTER_VALIDATE_EMAIL );  
        if( $from === NULL || $from === MAIL_FROM ) // si le courriel fourni est vide OU égal à la valeur par défaut  
        {  
            $errors[] = 'Vous devez renseigner votre adresse de courrier électronique.';  
        }  
        elseif( $from === false ) // si le courriel fourni n'est pas valide  
        {  
            $errors[] = 'L\'adresse de courrier électronique n\'est pas valide.';  
            $from = filter_input( INPUT_POST, 'from', FILTER_SANITIZE_EMAIL );  
        }

        $name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_HIGH | FILTER_FLAG_ENCODE_LOW );  
        if( $name === NULL OR $name === false OR empty( $name ) OR $name === MAIL_NAME ) // si le nom fourni est vide, invalide ou égale à la valeur par défaut  
        {  
            $errors[] = 'Vous devez renseigner votre nom.';  
        }  

        $object = filter_input( INPUT_POST, 'object', FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_HIGH | FILTER_FLAG_ENCODE_LOW );  
        if( $object === NULL OR $object === false OR empty( $object ) OR $object === MAIL_OBJECT ) // si l'objet fourni est vide, invalide ou égale à la valeur par défaut  
        {  
            $errors[] = 'Vous devez renseigner l\'objet.';  
        }  

        $message = filter_input( INPUT_POST, 'message', FILTER_UNSAFE_RAW );  
        if( $message === NULL OR $message === false OR empty( $message ) OR $message === MAIL_MESSAGE ) // si le message fourni est vide ou égale à la valeur par défaut  
        {  
            $errors[] = 'Vous devez écrire un message.';  
        }  

        if( count( $errors ) === 0 ) // si il n'y a pas d'erreurs  
        {  
            if( mail( MAIL_TO, $object, $message, "From: $from\nReply-to: $from\n" ) ) // tentative d'envoi du message  
            {  
                $mailSent = true;  
            }  
            else // échec de l'envoi  
            {  
                $errors[] = 'Votre message n\'a pas été envoyé.';  
            }  
        }  
    }  
    else // le formulaire est affiché pour la première fois, avec les valeurs par défaut  
    {  
        $name = MAIL_NAME;
        $from = MAIL_FROM;  
        $object = MAIL_OBJECT;  
        $message = MAIL_MESSAGE;  
    }  
?>  
<!DOCTYPE html>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    <meta name="author" content="Pierre Prézelin" />
    <meta name="description" content="Bonjour, je suis Pierre Prézelin, étudiant en multimédia basé à Angoulême. Ceci est mon portfolio, bonne visite ! // Hello, I'm Pierre Prézelin, a student in multimedia based in Angoulême. This is my digital portfolio, enjoy your tour !" />
    <meta name="keywords" content="pierre, prézelin, prezelin, portfolio, français, french, student, web, design, web design, infographie, image, graphic, graphisme, audiovisual, audiovisuel, developpement, webdevelopment, multimedia, son, html, css, javascript, js, php, src, srcang, services, reseaux, communication, etudiant, angouleme, france" />
    <meta name="google-site-verification" content="WCKYq0ZKl-oMM13i5qFLCiVlX589nU1qhnuzDFxNodM" />
    <title>Pierre Prézelin | Portfolio</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />        
    <link rel="icon" type="image/x-icon" href="favicon.ico" />        
</head>
<body>
    <span id="y-top"></span>
        <div id="header">
            <nav id="menu-header">              
                <a class="nom" href="index.php">Pierre // <span class="strong">PREZELIN</span></a>
                <nav id="langue">
                    <a href="index-en.php">EN</a><span> / </span><a href="index.php">FR</a>
                </nav>       
                <ul id="pages">
                    <li><a href="#accueil" title="Retour à l'accueil">ACCUEIL</a><span> // </span></li>                  
                    <li><a href="#travaux" title="Vers mes travaux">TRAVAUX</a><span> / </span></li>                      
                    <li><a href="#skills" title="Vers mes compétences">COMPETENCES</a><span> / </span></li>
                    <li><a href="#contact-page" title="Vers la page Contact">CONTACT</a></li>
                </ul>
            </nav>
        </div>
        <div id="toppage-content">
            <div id="conteneur-parralax">
                <div id="parallax"> 
                    <div id="txt-intro">
                        <p>*Plongez</p>
                    </div>
                    <div id="logo"><a href="#accueil" title="*Plongez"></a></div>
                    <div id="a1"><a href="./index.php"><img src="images/parallax/bulles-traits.png" alt='line bubble' width="550" height="255"/></a></div>
                    <div id="a2"><a href="./index.php"><img src="images/parallax/bulles-works.png" alt='works bubble' width="665" height="360"/></a></div>
                    <div id="a3"><a href="./index.php"><img src="images/parallax/bulles-works-shadows.png" alt='works bubble shadows' width="665" height="360"/></a></div>
                </div>
            </div>
        </div>
        <span id="accueil"></span>
        <div id="homepage-bg">
            <div id="bloc-txt">
                <div id="txt-home">
                    <h1>Bonjour ! je suis <span class="white">Pierre Prézelin</span>, étudiant en multimédia.</h1>
                    <p class="little-txt-home">J'adore donner le meilleur de moi-même, avec l'aide généreuse de plusieurs logiciels.</p>
                    <p class="big-txt-home">...Et ceci est mon...</p>
                    <a class="sprite sprite-portfolio_title"></a>
                    <!--<p class="little-txt-home2"><span class="white">(fait avec amour)</span></p>-->
                    <p class="moy-txt-home">Bonne visite !</p>
                    <hr>
                </div>
            </div>
        </div>
        <span id="travaux"></span>
        <div id="works">
            <div id="works-intro">
                <div class="transition">
                    <a class="sprite sprite-round-anchor" href="#skills" title="Vers mes compétences"></a>
                    <div class="block-category">
                        <h2>TRAVAUX</h2>
                    </div>
                </div>
                <div id="examples-intro">
                    <a class="sprite sprite-examples"></a>
                </div>
                <div class="filter">                   
                    <a class="button-audiovisual">Audiovisuel</a>
                    <a class="button-web-development">Développement web</a>
                    <a class="button-graphic-design">Graphisme</a>
                    <a class="button-all">Tout !</a>
                </div>
            </div>
            <div class="works-container">
                <div class="content">                     
                    <div class="graphic">
                        <a href="images/works/logo_OC.jpg" data-rel="shadowbox" title="Logo réalisé pour une association de promotion artistique">
                            <img src="images/works/OC_min.jpg" height=200 width=200 alt="Octopus Crew" />
                        </a>
                    </div>
                    <div class="webdev">
                        <a href="images/works/fande.JPG" data-rel="shadowbox" title="Projet PHP sur le thême d'un fan-site (en construction)">
                            <img src="images/works/fande_min.jpg" height=200 width=200 alt="Fan de..." />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/ibanez.jpg" data-rel="shadowbox" title="Vectorisation d'une Ibanez RG7620 sur Adobe Illustrator">
                            <img src="images/works/ibanez_min.jpg" height=200 width=200 alt="Ibanez RG7620" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/somadem.jpg" data-rel="shadowbox" title="Affiche réalisée pour un groupe de reggae local">
                            <img src="images/works/somadem_min.jpg" height=200 width=200 alt="Somadem" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/spotted.jpg" data-rel="shadowbox" title="Mise en forme du logo d'un projet annuel d'audiovisuel">
                            <img src="images/works/spotted_min.jpg" height=200 width=200 alt="Logo SPOTTED!" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/ironmaid.jpg" data-rel="shadowbox" title="Affiche fictive type années 50, réalisée sur Photoshop">
                            <img src="images/works/ironmaid_min.jpg" height=200 width=200 alt="Ironmaid" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/saion.jpg" data-rel="shadowbox" title="Logo réalisé pour l'appel d'offre d'une entreprise d'électronique">
                            <img src="images/works/saion_min.jpg" height=200 width=200 alt="Logo SAion" />
                        </a>
                    </div>
                    <div class="audiovisuel">
                        <a href="http://vimeo.com/82048489">
                            <img src="images/works/teaser_min.JPG" height=200 width=200 alt="Teaser SPOTTED!" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/aquarelle.jpg" data-rel="shadowbox" title="Aquarelle d'un paysage forestier et montagneux">
                            <img src="images/works/aquarelle_min.jpg" height=200 width=200 alt="Aquarelle" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/btq.jpg" data-rel="shadowbox" title="Logo réalisé pour un projet musical">
                            <img src="images/works/btq_min.jpg" height=200 width=200 alt="Logo Beyond the Quasar" />
                        </a>
                    </div>
                    <div class="webdev">
                        <a href="images/works/ccs.jpg" data-rel="shadowbox" title="Site offline, réalisé pour un projet annuel de communication">
                            <img src="images/works/ccs_min.jpg" height=200 width=200 alt="Color Code Studio" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/jp.jpg" data-rel="shadowbox" title="Dessin traditionnel de John Petrucci (Dream Theater)">
                            <img src="images/works/jp_min.jpg" height=200 width=200 alt="John Petrucci" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="line-transition-skills"></div>
        <span id="skills"></span>        
        <div id="skills-container">
            <div class="transition">
                <a class="sprite sprite-round-anchor" href="#contact-page" title="Vers la page Contact"></a>
                <div class="block-category">
                    <h2>COMPETENCES</h2>
                </div>
            </div>
            <div id="skills-content">
                <h1>En tant qu'étudiant en multimédia,</h1>
                <p class="little-txt-home">Je pense qu'il est primordial d'être polyvalent dans beaucoup de domaines.<br>
                Apprendre à utiliser toujours plus efficacement les logiciels de référence est mon credo.</p>
                <p class="little-txt-skills">Vous pouvez découvrir ici mes principales armes pour mes travaux.</p>
                <hr>
                <div id="container-soft">
                    <div id="bloc-soft">
                        <a class="sprite sprite-logo-soft"></a>
                    </div>
                </div>            
            </div>
        </div>  
        <span id="contact-page"></span>
        <div id="contact-container">           
            <div class="transition-contact">
                <a class="sprite sprite-round-anchor" href="#link-footer" title="Vers le bas de page"></a>
                <div class="block-category">
                    <h2>CONTACT</h2>
                </div>
            </div>
            <div id="contact-center">
                <div id="contact-left">
                    <h1>Ça valait le coup ?</h1>
                    <p class="txt-contact1">Vous pouvez ici me laisser un message, ou télécharger mon CV pour plus d'informations.<br>
                       Vous pouvez aussi me trouver sur les réseaux sociaux, exceptés les pigeons voyageurs. Ils salissent mon bureau.
                    </p>
                    <div id="bloc-form">
                        <div class="title-form-fr">
                            <p>RESTEZ EN CONTACT !</p>
                        </div>                        
                            <form id='contact' method="post" action="<?php echo( $_SERVER['REQUEST_URI'] ); ?>#link-footer">  
                                <p>  
                                    <label for="name">Nom :</label>  
                                    <input type="text" name="name" id="name" value="<?php echo( $name ); ?>" />  
                                </p>  
                                <p>  
                                    <label for="from">Email :</label>  
                                    <input type="text" name="from" id="from" value="<?php echo( $from ); ?>" />  
                                </p>  
                                <p>  
                                    <label for="object">Objet :</label>  
                                    <input type="text" name="object" id="object" value="<?php echo( $object ); ?>" />  
                                </p>   
                                <p>  
                                    <label for="message">Message :</label>  
                                    <textarea name="message" id="message" rows="10" cols="40"><?php echo( $message ); ?></textarea>  
                                </p>
                                <?php  
                                    if( $mailSent === true ) // si le message a bien été envoyé, on affiche le récapitulatif  
                                    {
                                ?>                       
                                    <p id="success">C'est envoyé !</p>
                                <?php  
                                }  
                                else  
                                    {  
                                        if( count( $errors ) !== 0 )  
                                        {  
                                            echo( "\t\t<ul class=\"txt-form\">\n" );  
                                            foreach( $errors as $error )  
                                            {  
                                                echo( "\t\t\t<li>$error</li>\n" );  
                                            }  
                                            echo( "\t\t</ul>\n" );  
                                        }  
                                        else  
                                        {  
                                            echo( "\t\t<p id=\"welcome\"></p>\n" );  
                                        }  
                                ?>  
                                <p>  
                                    <input type="submit" name="send" value="C'EST PARTI !"/>
                                </p>  
                            </form>  
                        <?php  
                            }  
                        ?>  
                    </div>
                </div>
                <div id="contact-right">
                    <div id="bloc-photo">
                        <p>(Oui, c'est bien moi)</p>
                        <a class="sprite sprite-photo"></a>
                    </div>
                    <div id="bloc-infos">
                        <h2>Vous pouvez me trouver sur</h2>
                        <hr>
                        <div class="container-social">
                            <div class="bloc-social">
                                <div id="bloc-network">
                                    <a class="sprite sprite-facebook" href="http://www.facebook.com/pierre.prezelin"></a>
                                    <a class="sprite sprite-deviantart" href="http://www.norwenaccard.deviantart.com/"></a>
                                    <a class="sprite sprite-vimeo" href="http://www.vimeo.com/pierreprezelin"></a>
                                    <a class="sprite sprite-linkedin" href="http://www.linkedin.com/pub/pierre-pr%C3%A9zelin/85/902/612"></a>
                                </div>
                            </div>
                        </div>
                        <h2>Envoyez-moi un e-mail !</h2>
                        <hr>
                        <div class="container-social">
                            <div class="bloc-social">
                                <div id="bloc-img">
                                    <a class="sprite sprite-email-img"></a>
                                </div>
                            </div>
                        </div>
                        <h2>Téléchargez mon CV</h2>
                        <hr>
                        <div class="container-social">
                            <div class="bloc-social">
                                <div id="bloc-cv">
                                    <a class="sprite sprite-pdf" href="assets/img/cv-fr.pdf"></a>
                                </div>
                            </div>                       
                        </div>
                    </div>
                    <div id="container-up">
                        <div id="bloc-up">
                            <a href="#y-top" title="RETOUR EN HAUT !">Raté quelque chose ? RETOUR EN HAUT !</a>
                        </div>
                    </div>
                </div>           
            </div>  
        </div>
        <div id="footer">
            <div id="bloc-footer">
                <p id="txt-footer-left">Ce site a été programmé avec <a href="http://www.w3.org/TR/html/">HTML5</a>, <a href="http://www.w3.org/TR/CSS/">CSS3</a> & <a href="http://jquery.com/">jQuery</a>. Pour une meilleure expérience, visitez ce site avec les dernières version de <a href="http://www.google.fr/intl/fr/chrome/browser/">Chrome</a>, <a href="http://www.mozilla.org/fr/firefox/new/">Firefox</a> ou <a href="http://support.apple.com/kb/DL1531?viewlocale=fr_FR">Safari.</a></p>
                <p id="txt-footer-right">© Copyright - Pierre Prézelin 2013 - <a href="assets/img/mentions.pdf">Mentions légales</a></p>       
            </div>
        </div>
        <span id="link-footer"></span>
        <script src="assets/js/global-compressed.js"></script>
    </body>
</html>