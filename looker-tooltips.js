// help_tooltip.js

function drawTooltipViz(data) {
    // Limpia el contenedor
    document.body.innerHTML = "";
  
    // Estilos base
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100%";
    
    // El signo de pregunta
    const helpIcon = document.createElement("span");
    helpIcon.textContent = "❓";  // O usa: "?" si prefieres
    helpIcon.style.fontSize = "28px";
    helpIcon.style.cursor = "pointer";
    helpIcon.style.fontWeight = "bold";
    helpIcon.style.color = "#0070F3";
    helpIcon.style.position = "relative";
  
    // El tooltip
    const tooltip = document.createElement("div");
    tooltip.textContent = (data && data.configParams && data.configParams.tooltip_message) 
      ? data.configParams.tooltip_message 
      : "Este es tu mensaje de ayuda o explicación.";
    tooltip.style.display = "none";
    tooltip.style.position = "absolute";
    tooltip.style.left = "35px";
    tooltip.style.top = "0px";
    tooltip.style.background = "#212121";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "10px 18px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    tooltip.style.zIndex = "99";
    tooltip.style.whiteSpace = "pre-line";
    tooltip.style.fontSize = "16px";
    tooltip.style.fontWeight = "normal";
    tooltip.style.maxWidth = "300px";
  
    helpIcon.onmouseenter = () => (tooltip.style.display = "block");
    helpIcon.onmouseleave = () => (tooltip.style.display = "none");
    helpIcon.appendChild(tooltip);
  
    document.body.appendChild(helpIcon);
  }
  
  // Listener para Data Studio
  dscc.subscribeToData(drawTooltipViz);
  
  // Parámetros de configuración (para poder cambiar el mensaje en cada instancia)
  var config = {
    options: {
      tooltip_message: {
        label: "Mensaje de ayuda",
        displayName: "Mensaje de ayuda",
        type: "TEXT_INPUT",
        placeholder: "Escribe aquí tu mensaje de ayuda o contexto",
        defaultValue: "Este es tu mensaje de ayuda o explicación."
      }
    }
  };
  try{dscc.registerConfig(config);}catch(e){}