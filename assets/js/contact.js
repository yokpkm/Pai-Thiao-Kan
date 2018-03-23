var myCenter = new google.maps.LatLng(13.651921,100.4948278,19);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);


// ******************การเดินทาง***********************



// Create an immediately invoked functional expression to wrap our code
(function() {

  // Define our constructor 
  this.Modal = function() {

    // Create global element references
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    // Determine proper prefix
    this.transitionEnd = transitionSelect();

    // Define option defaults 
    var defaults = {
      autoOpen: false,
      className: 'fade-and-drop',
      closeButton: true,
      content: "",
      maxWidth: 665,
      minWidth: 280,
      overlay: true
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    if(this.options.autoOpen === true) this.open();

  }

  // Public Methods

  Modal.prototype.close = function() {
    var _ = this;
    this.modal.className = this.modal.className.replace(" scotch-open", "");
    this.overlay.className = this.overlay.className.replace(" scotch-open",
      "");
    this.modal.addEventListener(this.transitionEnd, function() {
      _.modal.parentNode.removeChild(_.modal);
    });
    this.overlay.addEventListener(this.transitionEnd, function() {
      if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    });
  }

  Modal.prototype.open = function() {
    buildOut.call(this);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
        " scotch-open scotch-anchored" : " scotch-open");
    this.overlay.className = this.overlay.className + " scotch-open";
  }

  // Private Methods

  function buildOut() {

    var content, contentHolder, docFrag;

    /*
     * If content is an HTML string, append the HTML string.
     * If content is a domNode, append its content.
     */

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      content = this.options.content.innerHTML;
    }

    // Create a DocumentFragment to build with
    docFrag = document.createDocumentFragment();

    // Create modal element
    this.modal = document.createElement("div");
    this.modal.className = "scotch-modal " + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    // If closeButton option is true, add a close button
    if (this.options.closeButton === true) {
      this.closeButton = document.createElement("button");
      this.closeButton.className = "scotch-close close-button";
      this.closeButton.innerHTML = "&times;";
      this.modal.appendChild(this.closeButton);
    }

    // If overlay is true, add one
    if (this.options.overlay === true) {
      this.overlay = document.createElement("div");
      this.overlay.className = "scotch-overlay " + this.options.className;
      docFrag.appendChild(this.overlay);
    }

    // Create content area and append to modal
    contentHolder = document.createElement("div");
    contentHolder.className = "scotch-content";
    contentHolder.innerHTML = content;
    this.modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    docFrag.appendChild(this.modal);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);

  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function initializeEvents() {

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.close.bind(this));
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', this.close.bind(this));
    }

  }

  function transitionSelect() {
    var el = document.createElement("div");
    if (el.style.WebkitTransition) return "webkitTransitionEnd";
    if (el.style.OTransition) return "oTransitionEnd";
    return 'transitionend';
  }

}());

var myContent = document.getElementById('content');

var myModal = new Modal({
  content: myContent
});

var triggerButton = document.getElementById('trigger');

triggerButton.addEventListener('click', function() {
  myModal.open();
});


// *********************


  var nameSuccess = false, emailSuccess = false, messageSuccess = false;
  
  var $elements = $("input, textarea");
  $elements.on("focus", function() {
    var $selected = $(this);
    $elements.each(function() {
      var $this = $(this);
      if($this !== $selected)
        $(this).parent().css("opacity", 0.5);
    });
    $selected.parent().css("opacity", 1);
  });
  
  $("#contact-name").on("blur", validateName);
  $("#contact-email").on("blur", validateEmail);
  $("#contact-message").on("blur", validateMessage);
  
  $("#contact-send").on("click", function() {
    validateName();
    validateEmail();
    validateMessage();
    
    if(nameSuccess && emailSuccess && messageSuccess) {
      $(".form").slideUp();
    }
    else if(!nameSuccess) $("#contact-name").focus();
    else if(!emailSuccess) $("#contact-email").focus();
    else if(!messageSuccess) $("#contact-message").focus();
  });

function validateName(){
  var $name = $("#contact-name");
    var text = $name.val().trim();
    if(text.length < 2) {
      $name.parent().removeClass("has-success").addClass("has-error");
      nameSuccess = false;
    }
    else{
      $name.parent().removeClass("has-error").addClass("has-success");
      nameSuccess = true;
    }
}
  
  function validateEmail(){
    var $email = $("#contact-email");
    var text = $email.val().trim();
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    var match = pattern.test(text);
    if(match) {
      $email.parent().removeClass("has-error").addClass("has-success");
      emailSuccess = true;
    }
    else{
      $email.parent().removeClass("has-success").addClass("has-error");
      emailSuccess = false;
    }
  }
  
  function validateMessage(){
    var $message = $("#contact-message");
    var text = $message.val().trim();
    
    if(text.length > 1) {
      $message.parent().removeClass("has-error").addClass("has-success");
      messageSuccess = true;
    }
    else {
      $message.parent().removeClass("has-success").addClass("has-error");
      messageSuccess = false;
    }
  }

