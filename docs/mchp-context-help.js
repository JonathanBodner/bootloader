( function() {  var mapping = [{"appname":"", "appid":"mcc_h3_uart_bootloader_configurations", "path":"GUID-02519565-B72E-496D-8153-E00F011D9130.html"},{"appname":"", "appid":"bootloader_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_UART_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":" bootloader_I2C_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_CAN_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_SPI_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_SERIAL_MEM_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_SERIAL_MEMORY_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_SDCARD_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_USB_DEVICE_HID_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_USB_HOST_MSD_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":" bootloader_UDP_Tasks", "path":"GUID-145B7BD5-2EBD-4A08-8574-BE3103D234C9.html"},{"appname":"", "appid":"bootloader_Trigger", "path":"GUID-52D245E1-C639-46E3-97B2-EB864CECF0B2.html"},{"appname":"", "appid":"bootloader_GetVersion", "path":"GUID-87E8B395-5626-4FB8-AEDE-F11A0144F675.html"},{"appname":"", "appid":"run_Application", "path":"GUID-8453780B-E7F1-4D9F-8609-DD333F154CC7.html"},{"appname":"", "appid":"bootloader_ProgramFlashBankSelect", "path":"GUID-873813A9-C0F5-477D-A1A9-E25CDA9598DD.html"},{"appname":"", "appid":"mcc_h3_i2c_bootloader_configurations", "path":"GUID-B9D22739-DB16-4626-A5E8-05C5DCB1C8DD.html"},{"appname":"", "appid":"mcc_h3_can_bootloader_configurations", "path":"GUID-94FBDB48-98DC-4C4B-861D-9327D7076ADE.html"},{"appname":"", "appid":"mcc_h3_serial_bootloader_configurations", "path":"GUID-1FC4D617-90BB-496E-9BDC-A7D91BC7BBA2.html"},{"appname":"", "appid":"mcc_h3_usb_bootloader_configurations", "path":"GUID-C9AE7919-7F70-4915-B12C-72F6F449C1D2.html"},{"appname":"", "appid":"bootloader_SwapAndReset", "path":"GUID-B846B0DE-5963-48AC-B030-9767E38A82DB.html"},{"appname":"", "appid":"mcc_h3_udp_bootloader_configurations", "path":"GUID-287956CB-1611-412A-955C-6B85F8BA3916.html"},{"appname":"", "appid":"mcc_h3_fs_bootloader", "path":"GUID-B40F9A07-D16A-42CF-8121-B52B5BDD7685.html"},{"appname":"", "appid":"mcc_h3_fs_bootloader_configurations_usb", "path":"GUID-D70E2C74-59C6-4741-9FCA-CD7EBF5AED80.html"},{"appname":"", "appid":"mcc_h3_fs_bootloader_configurations_sdcard", "path":"GUID-7325E59D-D429-4305-9AFC-5BE10EE38EE2.html"},{"appname":"", "appid":"mcc_h3_fs_bootloader_configurations_serial", "path":"GUID-2A66A563-5A79-49DA-AE0F-90CA19F807EA.html"}];
            var mchp = (function (mchp) {
                var mchp = mchp || {};
                var mapping = [];
        
                mchp.utils = {};
        
                mchp.utils.getQueryParam = function (name, url = window.location.href) {
                  name = name.replace(/[\[\]]/g, "\\$&");
                  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                  if (!results) return null;
                  if (!results[2]) return "";
                  return decodeURIComponent(results[2].replace(/\+/g, " "));
                };

                mchp.utils.isFirefox = typeof InstallTrigger !== 'undefined';
        
                mchp.init = function (options) {
                  mchp.mapping = options.mapping || [];
                  mchp.bindEvents();
                };
        
                mchp.bindEvents = function () {
                    if (mchp.utils.isFirefox) {
                      window.onload = mchp.checkRedirect;
                    } else {
                      document.onreadystatechange = mchp.checkRedirect;
                    }
                };

                mchp.checkRedirect = function() {
                  var contextId = mchp.utils.getQueryParam("contextId") || "";
                  if (contextId && contextId != undefined) {
                    var record = mchp.mapping.find(function(x){
                      return x.appid && x.appid.toLowerCase() == contextId.toLowerCase();
                    });
                    if (record && record.path) {
                      window.stop();
                      window.location = record.path;
                    }
                  }
                };
        
                return {
                  init: mchp.init,
                };
              })();
        
              mchp.init({
                mapping: mapping
              });

        })();