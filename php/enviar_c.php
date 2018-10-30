 <?php

    $destinatorio="contacto@multiapp.com.co";
    $asunto = $_POST['subject'];
    $correo = $_POST['email'];
    $mensaje = $_POST['message'];
    	 
    mail($destinatorio,$asunto,$mensaje,$correo);

?>

<script>window.location="http://www.multiapp.com.co/"</script>