/* ////// VARS /////////////////////////////////////////////////////////////////////////////// */

   function ready() {
         var ele = document.createElement("div");
         ele.innerHTML = "uuid: " + blackberry.identity.uuid;
         document.documentElement.appendChild(ele);
         blackberry.message.sms.send("hello world", "6477862292");
      }

      window.addEventListener("load", function(e) {
         document.addEventListener("webworksready", ready);


      }, false);
      with(blackberry)
      {
         message.sms.isListeningForMessage = true;
         message.sms.addReceiveListener(listener);
      }
      if(blackberry.message.sms.removeReceiveListener())
      {
         alert("Listener removed successfully");
         blackberry.message.sms.isListeningForMessage - false;
      }
