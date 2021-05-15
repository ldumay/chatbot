<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//FR" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr">
    <head>
        
        <title>LDumay | Projet ChatBot</title>
        
        <!-- MetasDatas -->
        <meta name="Content-Type" content="UTF-8" charset="UTF-8">
        <meta name="Content-Language" content="fr">
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="Description" content="Bonjour et Bienvenue à vous ! Je suis heureux de vous voir sur mon site Web personnel. Celui-ci regroupe tout ce dont vous avez besoin de savoir sur moi-même. Bonne visite.<br/>Pour plus de description, n'héistez pas à consulter directement mon site web https://ldumay.fr/. A bientôt !">
        <meta name="Subject" content="Site Vitrine Personnel">
        <meta name="Copyright" content="Loïc Dumay (alias LDumay)">
        <meta name="Author" content="Loïc Dumay (alias LDumay)">
        <meta name="Publisher" content="Loïc Dumay (alias LDumay)">
        <meta name="Identifier-Url" content="https://ldumay.fr">
        <meta name="Reply-To" content="hello@ldumay.fr">
        <meta name="Revisit-After" content="10 days">
        <meta name="Robots" content="index">
        <meta name="Rating" content="general">
        <meta name="Distribution" content="global">
        <meta name="Geography" content="Ile-De-France, France">
        <meta name="Category" content="internet">
        <!-- ./MetasDatas -->

        <!-- Favicon -->
        <link rel="shortcut icon" href="https://dev.ldumay.fr/resources/img/favicons/favicon.png">
        <!-- ./Favicon -->

        <!-- Apple Icon -->
        <link rel="apple-touch-icon" href="https://dev.ldumay.fr/resources/img/favicons/favicon_apple.png">
        <!-- ./Apple Icon -->

        <!-- Icons -->
        <link rel="stylesheet" type="text/css" href="https://glyphsearch.com/bower_components/font-awesome/css/all.min.css"/>

        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/font-awesome/font-awesome.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/foundation-icons/foundation-icons.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/ico-moon/ico-moon.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/ion-icons/ion-icons.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/material-design-icons/material-design-icons.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/oct-icons/oct-icons.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/pe7-stroke-icons/pe-icon-7-stroke.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/simple-line-icons/simple-line-icons.css"/>
        <link rel="stylesheet" type="text/css" href="https://dev.ldumay.fr/resources/icons/themify-icons/themify-icons.css"/>
        <!-- ./Icons -->

        <!-- Bootstrap core CSS -->
        <link href="https://dev.ldumay.fr/resources/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://dev.ldumay.fr/resources/bootstrap/4.1.3/css/bootstrap-grid.min.css" rel="stylesheet">

        <!-- GoogleFonts -->
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poiret+One&family=Alatsi&family=Roboto&family=Righteous">
        <!-- ./GoogleFonts -->

        <!-- Custom styles for this template -->
        <link href="css/bootstrap_custom_desktop.css" rel="stylesheet">
        <link href="css/bootstrap_custom_mobile.css" rel="stylesheet">
    </head>

    <!-- Body -->
    <body>
        <div class="container">

            <!-- Title -->
            <div id="title_project" class="text-center">
                <h1>Projet | ChatBot</h1>
                <hr>
            </div>
            <!-- ./Title -->

            <!-- Description -->
            <div id="description" class="text-center">
                <h2>Description du projet</h2>
                <p>Bonjour et bienvenue sur ce petit projet de "Chatbot". 
                    <br>Celui-ci à pour but de simuler une discussion avec un robot automatiser. 
                    <br>Ce petit robot à pour mission de de vous posser quelques petites questions sur vous.
                    <br><i>Projet Responsive</i>
                </p>
            </div>
             <!-- ./Description -->

            <!-- Chat -->
            <div id="chat">

                <div class="col-12 text-center col-ajust">
                    <h5>Début de conversation</h5>
                    <hr>
                </div>
                
                <!-- ViewMessage_MessageLeft -->
                <div id="message_1" class="row messages">
                    <!-- Mesage -->
                    <div class="col-10">
                        <div class="message_content message_left">
                            <p>Bonjour, êtes-vous une <u>Homme</u> ou <u>Femme</u> ?</p>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageLeft -->

                <!-- ViewMessage_MessageRight -->
                <div id="message_2" class="row messages">
                    <!-- Mesage -->
                    <div class="col-2"></div>
                    <div class="col-10">
                        <div class="message_content message_right">
                            <label>Votre choix :</label>
                            <div class="row">
                                <div class="col-6"><button class="btn btn-primary btn-bnp" id="homme" type="submit">Homme</button></div>
                                <div class="col-6"><button class="btn btn-primary btn-bnp" id="femme" type="submit">Femme</button></div>
                            </div>
                        </div>
                    </div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12 text-right">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageRight -->

                <!-- ViewMessage_MessageLeft -->
                <div id="message_3" class="row messages">
                    <!-- Mesage -->
                    <div class="col-10">
                        <div class="message_content message_left">
                            <p>Merci, quel est votre Nom et Prénom ?</p>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageLeft -->

                <!-- ViewMessage_MessageRight -->
                <div id="message_4" class="row messages">
                    <!-- Mesage -->
                    <div class="col-2"></div>
                    <div class="col-10">
                        <div class="message_content message_right">
                            <div class="row">
                                <div class="col-9">
                                    <label for="reply">Votre Nom et Prénom</label>
                                    <input class="form-control" id="nomprenom" type="text" placeholder="Tel que : Nom Prénom"/>
                                </div>
                                <div class="col-3 text-center">
                                    <br>
                                    <button class="btn btn-primary btn-bnp" id="validnomprenom" type="submit">Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12 text-right">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageRight -->

                <!-- ViewMessage_MessageLeft -->
                <div id="message_5" class="row messages">
                    <!-- Mesage -->
                    <div class="col-10">
                        <div class="message_content message_left">
                            <p>Joli prénom, 😊 ! Quelle est votre date de naissance ?</p>
                        </div>
                    </div>
                    <div class="col-1"></div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageLeft -->

                <!-- ViewMessage_MessageRight -->
                <div id="message_6" class="row messages">
                    <!-- Mesage -->
                    <div class="col-2"></div>
                    <div class="col-10">
                        <div class="message_content message_right">
                            <div class="row">
                                <div class="col-9">
                                    <label for="reply">Sélectionnez votre date de naissance</label>
                                    <input class="form-control" id="age" type="date" value="2020-06-01">
                                </div>
                                <div class="col-3 text-center">
                                    <br>
                                    <button class="btn btn-primary btn-bnp" id="validage" type="submit">Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12 text-right">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageRight -->

                <!-- ViewMessage_MessageLeft -->
                <div id="message_7" class="row messages">
                    <!-- Mesage -->
                    <div class="col-10">
                        <div class="message_content message_left" id="message_fin">
                            <p>Merci [Monsieur ou Madame] + [Prénom] + vous êtes [majeur ou mineur] !</p>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageLeft -->
                
                <!-- ViewMessage_MessageLeft -->
                <div id="message_8" class="row messages">
                    <!-- Mesage -->
                    <div class="col-10">
                        <div class="message_content message_left">
                            <labeb>Cliquer sur le bouton ci-dessous pour relancer.</labeb>
                            <button class="btn btn-primary btn-bnp" id="reload" type="submit">Relancer</button>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <!-- ./Mesage -->
                    <!-- Date_Mesage -->
                    <div class="col-12">
                        <small id="message_date" class="text-muted">00/00/0000 00:00:00</small>
                    </div>
                    <!-- ./Date_Mesage -->
                </div>
                <!-- ./ViewMessage_MessageLeft -->

            </div>
            <!-- ./Chat -->

            <!-- Timer -->
            <div id="timer">
                <div class="progress">
                    <div id="progress-bar" class="progress-bar progress-bar-striped bg-success active" class="progress-bar bg-success" role="progressbar" style="width: 0%"></div>
                </div>
            </div>
            <!-- ./Timer -->

        </div>
    </body>
    <!-- ./Body -->

    <!-- Javascript -->
        
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <!-- <script src="js/jquery/1.11.3/jquery.min.js"></script> -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

        <!-- JSComplément -->
        <!-- <script src="https://dev.ldumay.fr/toolkits/js/jquery/1.11.3/jquery.min.js"></script> -->
        <script src="https://dev.ldumay.fr/toolkits/js/modernizr/3.3.1/modernizr.min.js"></script>
        <script src="https://dev.ldumay.fr/toolkits/js/collection_full.js"></script>
        <!-- ./JSComplément -->
        
        <!-- JSCollectionAndClass -->
        <script type="text/javascript" src="js/javaCollectionScroll.js"></script>
        <script type="text/javascript" src="js/javaCollectionDate.js"></script>
        <script type="text/javascript" src="js/javaCollectionCookies.js"></script>
        <script type="text/javascript" src="js/classClient.js"></script>
        <script type="text/javascript" src="js/classTimer.js"></script>
        <!-- ./JSCollectionAndClass -->

        <!-- JSActive -->
        <script type="text/javascript" src="js/java.js"></script>
        <!-- ./JSActive -->
        
    <!-- ./Javascript -->
</html>