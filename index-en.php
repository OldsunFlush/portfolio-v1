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
            $errors[] = 'You have to inform your email adress.';  
        }  
        elseif( $from === false ) // si le courriel fourni n'est pas valide  
        {  
            $errors[] = 'The email adress is not valid';  
            $from = filter_input( INPUT_POST, 'from', FILTER_SANITIZE_EMAIL );  
        }

        $name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_HIGH | FILTER_FLAG_ENCODE_LOW );  
        if( $name === NULL OR $name === false OR empty( $name ) OR $name === MAIL_NAME ) // si le nom fourni est vide, invalide ou égale à la valeur par défaut  
        {  
            $errors[] = 'You have to inform your name.';  
        }  

        $object = filter_input( INPUT_POST, 'object', FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_HIGH | FILTER_FLAG_ENCODE_LOW );  
        if( $object === NULL OR $object === false OR empty( $object ) OR $object === MAIL_OBJECT ) // si l'objet fourni est vide, invalide ou égale à la valeur par défaut  
        {  
            $errors[] = 'You have to write an object.';  
        }  

        $message = filter_input( INPUT_POST, 'message', FILTER_UNSAFE_RAW );  
        if( $message === NULL OR $message === false OR empty( $message ) OR $message === MAIL_MESSAGE ) // si le message fourni est vide ou égale à la valeur par défaut  
        {  
            $errors[] = 'You have to write a message.';  
        }  

        if( count( $errors ) === 0 ) // si il n'y a pas d'erreurs  
        {  
            if( mail( MAIL_TO, $object, $message, "From: $from\nReply-to: $from\n" ) ) // tentative d'envoi du message  
            {  
                $mailSent = true;  
            }  
            else // échec de l'envoi  
            {  
                $errors[] = 'Your message was not sent.';  
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
    <meta name="google-site-verification" content="WCKYq0ZKl-oMM13i5qFLCiVlX589nU1qhnuzDFxNodM" />
    <title>Pierre Prézelin | Portfolio</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />        
    <link rel="icon" type="image/x-icon" href="favicon.ico" />        
</head>
<body>
    <span id="y-top"></span>
        <div id="header">
            <nav id="menu-header">              
                <a class="nom" href="index-en.php">Pierre // <span class="strong">PREZELIN</span></a>
                <nav id="langue">
                    <a href="index-en.php">EN</a><span> / </span><a href="index.php">FR</a>
                </nav>       
                <ul id="pages">
                    <li><a href="#accueil" title="Back to home">HOME</a><span> // </span></li>                  
                    <li><a href="#travaux" title="To my works">WORKS</a><span> / </span></li>                      
                    <li><a href="#skills" title="To my skills">SKILLS</a><span> / </span></li>
                    <li><a href="#contact-page" title="To the contact page">CONTACT</a></li>
                </ul>
            </nav>
        </div>
        <div id="toppage-content">
            <div id="conteneur-parralax">
                <div id="parallax"> 
                    <div id="txt-intro">
                        <p>*Dive</p>
                    </div>
                    <div id="logo"><a href="#accueil" title="*Dive"></a></div>
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
                    <h1>Hello ! I am <span class="white">Pierre Prézelin</span>, a multimedia student based in France.</h1>
                    <p class="little-txt-home">I enjoy creating the best things I can, with the generous help of many softwares.</p>
                    <p class="big-txt-home">...And this is my...</p>
                    <a class="sprite sprite-portfolio_title"></a>
                    <p class="moy-txt-home">Please enjoy your tour !</p>
                    <hr>
                </div>
            </div>
        </div>
        <span id="travaux"></span>
        <div id="works">
            <div id="works-intro">
                <div class="transition">
                    <a class="sprite sprite-round-anchor" href="#skills" title="To my skills"></a>
                    <div class="block-category">
                        <h2>TRAVAUX</h2>
                    </div>
                </div>
                <div id="examples-intro">
                    <a class="sprite sprite-examples-en"></a>
                </div>
                <div class="filter">                   
                    <a class="button-audiovisual">Audiovisual</a>
                    <a class="button-web-development">Web develoment</a>
                    <a class="button-graphic-design">Graphic design</a>
                    <a class="button-all">All !</a>
                </div>
            </div>
            <div class="works-container">
                <div class="content">                     
                    <div class="graphic">
                        <a href="images/works/logo_OC.jpg" data-rel="shadowbox" title="Logo realised for an association promoting artistic works">
                            <img src="images/works/OC_min.jpg" height=200 width=200 alt="Octopus Crew" />
                        </a>
                    </div>
                    <div class="webdev">
                        <a href="images/works/fande.JPG" data-rel="shadowbox" title="PHP project on the theme of a fan website (still in construction)">
                            <img src="images/works/fande_min.jpg" height=200 width=200 alt="Fan de..." />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/ibanez.jpg" data-rel="shadowbox" title="Vectorization of an Ibanez RG7620 in Adobe Illustrator">
                            <img src="images/works/ibanez_min.jpg" height=200 width=200 alt="Ibanez RG7620" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/somadem.jpg" data-rel="shadowbox" title="Placard realised for a local reggae band">
                            <img src="images/works/somadem_min.jpg" height=200 width=200 alt="Somadem" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/spotted.jpg" data-rel="shadowbox" title="Logo of an annual audiovisual project">
                            <img src="images/works/spotted_min.jpg" height=200 width=200 alt="Logo SPOTTED!" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/ironmaid.jpg" data-rel="shadowbox" title="Fictive placard in a 50' retro style, made in Photoshop">
                            <img src="images/works/ironmaid_min.jpg" height=200 width=200 alt="Ironmaid" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/saion.jpg" data-rel="shadowbox" title="Logo realised for an electronics company">
                            <img src="images/works/saion_min.jpg" height=200 width=200 alt="Logo SAion" />
                        </a>
                    </div>
                    <div class="audiovisuel">
                        <a href="http://vimeo.com/82048489">
                            <img src="images/works/teaser_min.JPG" height=200 width=200 alt="Teaser SPOTTED!" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/aquarelle.jpg" data-rel="shadowbox" title="Watercolor of a forest and mountain landscape">
                            <img src="images/works/aquarelle_min.jpg" height=200 width=200 alt="Watercolor" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/btq.jpg" data-rel="shadowbox" title="Logo realised for a musical project">
                            <img src="images/works/btq_min.jpg" height=200 width=200 alt="Logo Beyond the Quasar" />
                        </a>
                    </div>
                    <div class="webdev">
                        <a href="images/works/ccs.jpg" data-rel="shadowbox" title="Offline website, realised for an annual communication project">
                            <img src="images/works/ccs_min.jpg" height=200 width=200 alt="Color Code Studio" />
                        </a>
                    </div>
                    <div class="graphic">
                        <a href="images/works/jp.jpg" data-rel="shadowbox" title="Traditional drawing of John Petrucci (Dream Theater)">
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
                <a class="sprite sprite-round-anchor" href="#contact-page" title="To the contact page"></a>
                <div class="block-category">
                    <h2>SKILLS</h2>
                </div>
            </div>
            <div id="skills-content">
                <h1>As a student in multimedia,</h1>
                <p class="little-txt-home">I think this is essential to be polyvalent in many domains.<br>
                Learning to use always better the reference softwares is my credo.</p>
                <p class="little-txt-skills">You can check in this part my favourite weapons for my works.</p>
                <hr>
                <div id="container-soft">
                    <div id="bloc-soft">
                        <a class="sprite sprite-logo-soft-en"></a>
                    </div>
                </div>            
            </div>
        </div>  
        <span id="contact-page"></span>
        <div id="contact-container">           
            <div class="transition-contact">
                <a class="sprite sprite-round-anchor" href="#link-footer" title="To the footer"></a>
                <div class="block-category">
                    <h2>CONTACT</h2>
                </div>
            </div>
            <div id="contact-center">
                <div id="contact-left">
                    <h1>Was it worth it ?</h1>
                    <p class="txt-contact1">Here, you can leave me a message, or get my résumé for more informations.<br>
                       You can also stalk me with every social networks you want, except carrier pigeons. They mess up my desk.
                    </p>
                    <div id="bloc-form">
                        <div class="title-form-fr">
                            <p>GET IN TOUCH !</p>
                        </div>                        
                            <form id='contact' method="post" action="<?php echo( $_SERVER['REQUEST_URI'] ); ?>#link-footer">  
                                <p>  
                                    <label for="name">Name :</label>  
                                    <input type="text" name="name" id="name" value="<?php echo( $name ); ?>" />  
                                </p>  
                                <p>  
                                    <label for="from">Email :</label>  
                                    <input type="text" name="from" id="from" value="<?php echo( $from ); ?>" />  
                                </p>  
                                <p>  
                                    <label for="object">Object :</label>  
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
                                    <p id="success">On the way !</p>
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
                                    <input type="submit" name="send" value="LET'S GO !"/>
                                </p>  
                            </form>  
                        <?php  
                            }  
                        ?>  
                    </div>
                </div>
                <div id="contact-right">
                    <div id="bloc-photo-en">
                        <p>(Yes, it's me)</p>
                        <a class="sprite sprite-photo"></a>
                    </div>
                    <div id="bloc-infos">
                        <h2>You can find me on</h2>
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
                        <h2>Send me an email !</h2>
                        <hr>
                        <div class="container-social">
                            <div class="bloc-social">
                                <div id="bloc-img">
                                    <a class="sprite sprite-email-img"></a>
                                </div>
                            </div>
                        </div>
                        <h2>Get my CV</h2>
                        <hr>
                        <div class="container-social">
                            <div class="bloc-social">
                                <div id="bloc-cv">
                                    <a class="sprite sprite-pdf" href="assets/img/cv-en.pdf"></a>
                                </div>
                            </div>                       
                        </div>
                    </div>
                    <div id="container-up">
                        <div id="bloc-up">
                            <a href="#y-top" title="RETOUR EN HAUT !">Missed something ? BACK TO TOP !</a>
                        </div>
                    </div>
                </div>           
            </div>  
        </div>
        <div id="footer">
            <div id="bloc-footer">
                <p id="txt-footer-left">This site was built with <a href="http://www.w3.org/TR/html/">HTML5</a>, <a href="http://www.w3.org/TR/CSS/">CSS3</a> & <a href="http://jquery.com/">jQuery</a>. For a better experience, please view this website with the last versions of <a href="http://www.google.com/intl/en/chrome/browser/">Chrome</a>, <a href="http://www.mozilla.org/en-US/firefox/new/">Firefox</a> or <a href="http://support.apple.com/kb/dl1531">Safari.</a></p>
                <p id="txt-footer-right">© Copyright - Pierre Prézelin 2013 - <a href="assets/img/mentions.pdf">Legal Notice</a></p>       
            </div>
        </div>
        <span id="link-footer"></span>
        <script src="assets/js/global-compressed.js"></script>
    </body>
</html>