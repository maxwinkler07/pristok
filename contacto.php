<!DOCTYPE HTML>
<html>
	<head>
	<head>
		<title>Contacto</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" type="text/css" href="css/cookies.css" />
		<script src="js/cookies.js"></script>
		<script src="js/jquery.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-layers.min.js"></script>
		<script src="js/init.js"></script>
		<link rel="icon" href="images/soloarriba.ico" />
		
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-xlarge.css" />
		</noscript>
	</head>
	
	    <!-- =======================================================
        
        	
        	BY PRISTOK TECHNOLOGY © - CONTACTO FILE
        	
        	
    ======================================================= -->
	
	<body id="top">

		<!-- Header -->
			<header id="header" class="skel-layers-fixed">
				<h1><a href="#"><a href="https://www.pristok.com"><img alt="" src="images/glowblancoelmejor.png" width="100" height="45"> </a></a></h1>
				<nav id="nav">
					<ul>
						<li><a href="index.html">Inicio</a></li>
						<li><a href="sobrenosotros.html">Sobre nosotros</a></li>
						<li><a href="nuestroequipo.html">Nuestro equipo</a></li>
						<li><a href="contacto.php">Contacto</a></li>
					</ul>
				</nav>
			</header>

		<!-- Main -->
		<?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
    <form  action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">
    Nombre y Apellido:<br>
    <input name="name" type="text" value="" size="30"/><br>
    Email:<br>
    <input name="email" type="text" value="" size="30"/><br>
    Su mensaje:<br>
    <textarea name="message" rows="7" cols="30"></textarea><br>
    <input type="submit" value="Enviar"/>
    </form>
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
		echo "Todos los campos son obligatorios, porfavor rellee <a href=\"\">el formulario</a> otra vez.";
	    }
    else{		
	    $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
		mail("info@pristok.com", $subject, $message, $from);
		echo "¡Mensaje enviado!";
	    }
    }  
?>

<!-- Footer -->
		
			<footer id="footer">
				<div class="container">
					<div class="row double">
						<div class="12u">
						<p></p>
						<strong>QUIENES SOMOS</strong>
							<p>Somos una pequeña empresa dedicada al desarrollo de apps y webs para su negocio o proyecto personal</p>
							<ul class="icons">
								<li><a href="https://www.facebook.com/pristok.technology/" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							</ul>
						</div>
					</div>
					<ul class="copyright">
						<strong>ENLACES DE INTERES</strong>
						<li><p><a href="politica-de-privacidad.html" title="Política de privacidad" target="new">Política de privacidad</a></p></li>
						<li><p><a href="/contacto.php" title="Contacto">Contacto</a></p></li>
						<li><p><a href="sobrenosotros.html" title="Sobre nosotros">Sobre nosotros</a></p></li>
						<li><p><a href="sitemap.html" title="Sitemap" target="new">Sitemap</a></p></li>
						<li><p>+34 609331732</p></li>
						<hr>
						<li>&copy; Pristok Technology. All rights reserved.</li>
						<li>Design: <a href="http://pristok.com">Pristok Technology</a></li></hr>
					</ul>
				</div>
				<script>
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000",
      "text": "#fff"
    },
    "button": {
      "background": "#fff"
    }
  },
  "theme": "classic",
  "content": {
    "message": "Esta página web hace uso de cookies para mejorar tu experiencia",
    "dismiss": "OK!",
    "link": "Quiero saber más"
  }
})});
</script>
			</footer>
		</body>
</html>