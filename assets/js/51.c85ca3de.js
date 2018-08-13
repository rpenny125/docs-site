(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{207:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("When you initially open the MVD, a security message alerts you that you are attempting to open a site that has an invalid HTTPS certificate. Other applications within the MVD might also encounter this message. To prevent this message, add the URLs that you see to your list of trusted sites.")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("zLUX APIs exist but are under development. Features might be reorganized if it simplifies and clarifies the API, and features might be added if applications can benefit from them.h")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("To help zLUX research any problems you might encounter, collect as much of the following information as possible and open an issue in GitHub with the collected information.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("If explorer server REST APIs do not work, check the following items:")]),e._v(" "),s("ul",[e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("li",[s("p",[e._v("If testing the explorer server REST API for data set information fails, check the z/OSMF IZUSVR1 task output for errors and confirm that the z/OSMF RESTFILES services are started successfully. If no errors occur, you can see the following message in the IZUSVR1 job output:")]),e._v(" "),e._m(13),s("p",[e._v("You can also call z/OSMF RESTFILES APIs directly from your internet browser with a URL, for example,")]),e._v(" "),s("p",[e._v("https://your.server:securezosmfport/zosmf/restfiles/ds?dslevel=userid.**")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v(" The z/OSMF installation step of creating a valid IZUFPROC procedure in your system PROCLIB might be missed. For more information, see the "),s("a",{attrs:{href:"https://www-01.ibm.com/servers/resourcelink/svc00100.nsf/pages/zOSV2R3sc278419?OpenDocument",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OSMF Configuration Guide"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The IZUFPROC member resides in your system PROCLIB, which is similar to the following sample:")]),e._v(" "),e._m(16),e._m(17),e._v(" "),s("p",[e._v("A known issue and workaround for RESTFILES API can be found at "),s("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?crawler=1&uid=isg1PI63398",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSO SERVLET EXCEPTION ATTEMPTING TO USE RESTFILE INTERFACE"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(18)]),e._v(" "),s("p",[e._v("If the explorer server cannot connect to the z/OSMF server, check the following item:")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior using Zowe CLI.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("This behavior is due to a problem with Node Package Manager (npm). There\nis an open issue on the npm GitHub repository to fix the defect.")]),e._v(" "),e._m(24),e._v(" "),s("p",[e._v("If you encounter this problem, some users report that repeatedly\nattempting to install Zowe CLI yields success. Some users also\nreport success using the following workarounds:")]),e._v(" "),s("ul",[e._m(25),e._v(" "),s("li",[s("p",[e._v("Uninstall and reinstall Zowe CLI. For more information,\nsee "),s("router-link",{attrs:{to:"./cli-installcli.html"}},[e._v("Install Zowe CLI")]),e._v(".")],1)]),e._v(" "),e._m(26)]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),s("p",[e._v("The installation fails on Linux.")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),s("p",[e._v("This behavior is due to a problem with Node Package Manager (npm). If\nyou encounter this problem, revert to a previous version of npm that\ndoes not contain this defect. To revert to a previous version of npm,\nissue the following command:")]),e._v(" "),e._m(37),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),s("p",[e._v("You attempt to issue node.js commands and you do not receive the expected  output.")]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),s("p",[e._v("You receive error messages when you attempt to install the product on an\nOracle Linux 6 operating system.")]),e._v(" "),e._m(46),e._v(" "),s("p",[e._v("Install the product on Oracle Linux 7 or another Linux or Windows OS. Zowe CLI is not compatible with Oracle Linux 6.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"troubleshooting-the-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-the-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting the installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known issues")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" If you clear the browser cache, you must add the URL to your trusted sites again.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"troubleshooting-installing-the-zowe-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-installing-the-zowe-runtime","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting installing the Zowe runtime")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[s("p",[e._v("Environment variables")]),e._v(" "),s("p",[e._v("To prepare the environment for the Zowe runtime, a number of ZFS folders need to be located for prerequisites on the platform that Zowe needs to operate. These can be set as environment variables before the script is run.  If the environment variables are not set, the install script will attempt to locate default values.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ZOWE_ZOSMF_PATH")]),e._v(": The path where z/OSMF is installed.  Defaults to "),s("code",[e._v("/usr/lpp/zosmf/lib/defaults/servers/zosmfServer")])]),e._v(" "),s("li",[s("code",[e._v("ZOWE_JAVA_HOME")]),e._v(":  The path where 64 bit Java 8 or later is installed.  Defaults to "),s("code",[e._v("/usr/lpp/java/J8.0_64")])]),e._v(" "),s("li",[s("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(": The IP address of where the explorer servers are launched from.  Defaults to running "),s("code",[e._v("hostname -c")])])]),e._v(" "),s("p",[e._v("The first time the script is run if it has to locate any of the environment variables, the script will add lines to the current user's home directory "),s("code",[e._v(".profile")]),e._v(" file to set the variables.  This ensures that the next time the same user runs the install script, the previous values will be used.")]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": If you wish to set the environment variables for all users, add the lines to assign the variables and their values to the file "),s("code",[e._v("/etc/.profile")]),e._v(".")]),e._v(" "),s("p",[e._v("If the environment variables for "),s("code",[e._v("ZOWE_ZOSMF_PATH")]),e._v(", "),s("code",[e._v("ZOWE_JAVA_HOME")]),e._v(" are not set and the install script cannot determine a default location, the install script will prompt for their location.  The install script will not continue unless valid locations are provided.")])]),e._v(" "),s("li",[s("p",[e._v("Expanding the PAX files")]),e._v(" "),s("p",[e._v("The install script will create the Zowe runtime directory structure using the  "),s("code",[e._v("install:rootDir")]),e._v(" value in the  "),s("code",[e._v("zowe-install.yaml")]),e._v(" file.  The runtime components of the Zowe server are then unpaxed into the directory that contains a number of directories and files that make up the Zowe runtime.")]),e._v(" "),s("p",[e._v("If the expand of the PAX files is successful, the install script will report that it ran its install step to completion.")])]),e._v(" "),s("li",[s("p",[e._v("Changing Unix permissions")]),e._v(" "),s("p",[e._v("After the install script lay down the contents of the Zowe runtime into the "),s("code",[e._v("rootDir")]),e._v(", the next step is to set the file and directory permissions correctly to allow the Zowe runtime servers to start and operate successfully.")]),e._v(" "),s("p",[e._v("The install process will execute the file "),s("code",[e._v("scripts/zowe-runtime-authorize.sh")]),e._v(" in the Zowe runtime directory.  If the script is successful, the result is reported.  If for any reason the script fails to run because of insufficient authority by the user running the install, the install process reports the errors.  A user with sufficient authority should then run the "),s("code",[e._v("zowe-runtime-authorize.sh")]),e._v(".  If you attempt to start the Zowe runtime servers without the "),s("code",[e._v("zowe-runtime-authorize.sh")]),e._v(" having successfully completed, the results are unpredictable and Zowe runtime startup or runtime errors will occur.")])]),e._v(" "),s("li",[s("p",[e._v("Creating the PROCLIB member to run the Zowe runtime")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v("  The name of the PROCLIB member might vary depending on the standards in place at each z/OS site, however for this documentation, the PROCLIB member is called "),s("code",[e._v("ZOWESVR")]),e._v(".")]),e._v(" "),s("p",[e._v("At the end of the installation, a Unix file "),s("code",[e._v("ZOWESVR.jcl")]),e._v(" is created under the directory where the runtime is installed into, "),s("code",[e._v("$INSTALL_DIR/files/templates")]),e._v(". The contents of this file need to be tailored and placed in a JCL member of the PROCLIB concatenation for the Zowe runtime to be executed as a started task.  The install script does this automatically, trying data sets "),s("code",[e._v("USER.PROCLIB")]),e._v(", other PROCLIB data sets found in the PROCLIB concatenation and finally "),s("code",[e._v("SYS1.PROCLIB")]),e._v(".")]),e._v(" "),s("p",[e._v("If this succeeds, you will see a message like the following one:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PROC ZOWESVR placed in USER.PROCLIB\n")])])]),s("p",[e._v("Otherwise you will see messages beginning with the following information:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Failed to put ZOWESVR.JCL in a PROCLIB dataset.\n")])])]),s("p",[e._v("In this case, you need to copy the PROC manually. Issue the TSO "),s("code",[e._v("oget")]),e._v(" command to copy the "),s("code",[e._v("ZOWESVR.jcl")]),e._v(" file to the preferred PROCLIB:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("oget '$INSTALL_DIR/files/templates/ZOWESVR.jcl' 'MY.USER.PROCLIB(ZOWESVR)'\n")])])]),s("p",[e._v("You can place the PROC in any PROCLIB data set in the PROCLIB concatenation, but some data sets such as "),s("code",[e._v("SYS1.PROCLIB")]),e._v(" might be restricted, depending on the permission of the user.")]),e._v(" "),s("p",[e._v("You can tailor the JCL at this line")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//ZOWESVR   PROC SRVRPATH='/zowe/install/path/explorer-server'\n")])])]),s("p",[e._v("to replace the "),s("code",[e._v("/zowe/install/path")]),e._v(" with the location of the Zowe runtime directory that contains the explorer server.  Otherwise you must specify that path on the START command when you start Zowe in SDSF:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/S ZOWESVR,SRVRPATH='$ZOWE_ROOT_DIR/explorer-server'\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"troubleshooting-installing-zlux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-installing-zlux","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting installing zLUX")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Project Zowe version and release level")]),e._v(" "),s("li",[e._v("z/OS release level")]),e._v(" "),s("li",[e._v("Job output and dump (if any)\n"),s("ul",[s("li",[e._v("Javascript console output (Web Developer toolkit accessible by pressing F12)")]),e._v(" "),s("li",[e._v("Log output from the Zowe Node Server")])])]),e._v(" "),s("li",[e._v("Error message codes")]),e._v(" "),s("li",[e._v("Screenshots (if applicable)")]),e._v(" "),s("li",[e._v("Other relevant information (such as the version of Node.js that is running on the Zowe Node Server and the browser and browser version).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"troubleshooting-installing-explorer-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-installing-explorer-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting installing explorer server")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Check whether your Liberty explorer server is running.")]),e._v(" "),s("p",[e._v("You can check this in the Display Active (DA) panel of SDSF under ISPF. The ZOWESVR started task should be running. If the ZOWESVR task is not running, start the explorer server by using the following "),s("code",[e._v("START")]),e._v(" operator command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/S ZOWESVR\n")])])]),s("p",[e._v("You can also use the operator command "),s("code",[e._v("/D A,ZOWESVR")]),e._v(" to verify whether the task is active, which alleviates the need for the DA panel of SDSF. If the started task is not running, ensure that your ZOWESVR procedure resides in a valid PROCLIB data set, and check the task’s job output for errors.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Check whether the explorer server is started without errors.")]),this._v(" "),t("p",[this._v("In the DA panel of SDSF under ISPF, select the ZOWESVR job to view the started task output. If the explorer server is started without errors, you can see the following messages:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("CWWKE0001I: The server Atlas has been launched.\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("CWWKF0011I: The server Atlas is ready to run a smarter planet.\n")])])]),t("p",[this._v('If you see error messages that are prefixed with "ERROR" or stack traces in the ZOWESVR job output, respond to them.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Check whether the URL that you use to call explorer server REST APIs is correct. For example: https://your.server:atlasport/Atlas/api/system/version. The URL is case-sensitive.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Ensure that you enter a valid z/OS® user ID and password when initially connecting to the explorer server.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("If testing the explorer server REST API for jobs information fails, check the z/OSMF IZUSVR1 task output for errors. If no errors occur, you can see the following messages in the IZUSVR1 job output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CWWKE0001I : The server zosmfServer has been launched.\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CWWKF0011I: The server zosmfServer is ready to run a smarter planet.\n")])])]),s("p",[e._v("If you see error messages, respond to them.")]),e._v(" "),s("p",[e._v("For RESTJOBS, you can see the following message if no errors occur:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CWWKZ0001I: Application IzuManagementFacilityRestJobs started in n.nnn seconds.\n")])])]),s("p",[e._v("You can also call z/OSMF RESTJOBS APIs directly from your Internet browser with a URL, for example,")]),e._v(" "),s("p",[e._v("https://your.server:securezosmfport/zosmf/restjobs/jobs")]),e._v(" "),s("p",[e._v("where the "),s("em",[e._v("securezosmfport")]),e._v(" is 443 by default. You can verify the port number by checking the "),s("em",[e._v("izu.https.port")]),e._v(" variable assignment in the z/OSMF "),s("code",[e._v("bootstrap.properties")]),e._v(" file.")]),e._v(" "),s("p",[e._v("You might get error message IZUG846W, which indicates that a cross-site request forgery (CSRF) was attempted. To resolve the issue, update your browser by adding the "),s("code",[e._v("X-CSRF-ZOSMF-HEADER")]),e._v(' HTTP custom header to every cross-site request. This header can be set to any value or an empty string (""). For details, see the z/OSMF documentation. If calling the z/OSMF RESTJOBS API directly fails, fix z/OSMF before explorer server can use these APIs successfully.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("CWWKZ0001I: Application IzuManagementFacilityRestFiles started in n.nnn seconds.\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where the "),t("em",[this._v("securezosmfport")]),this._v(" is 443 by default. You can verify the port number by checking the "),t("em",[this._v("izu.https.port")]),this._v(" variable assignment in the z/OSMF "),t("code",[this._v("bootstrap.properties")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You might get error message IZUG846W, which indicates that a cross-site request forgery (CSRF) was attempted. To resolve the issue, update your browser by adding the "),t("code",[this._v("X-CSRF-ZOSMF-HEADER")]),this._v(' HTTP custom header to every cross-site request. This header can be set to any value or an empty string (""). For details, see the z/OSMF documentation. If calling the z/OSMF RESTFILES API directly fails, fix z/OSMF before explorer server can use these APIs successfully.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("//IZUFPROC PROC ROOT='/usr/lpp/zosmf'  /* zOSMF INSTALL ROOT     */\n//IZUFPROC EXEC PGM=IKJEFT01,DYNAMNBR=200                          \n//SYSEXEC  DD DISP=SHR,DSN=ISP.SISPEXEC                            \n//         DD DISP=SHR,DSN=SYS1.SBPXEXEC                           \n//SYSPROC  DD DISP=SHR,DSN=ISP.SISPCLIB                            \n//         DD DISP=SHR,DSN=SYS1.SBPXEXEC                           \n//ISPLLIB  DD DISP=SHR,DSN=SYS1.SIEALNKE                           \n//ISPPLIB  DD DISP=SHR,DSN=ISP.SISPPENU                            \n//ISPTLIB  DD RECFM=FB,LRECL=80,SPACE=(TRK,(1,0,1))                \n//         DD DISP=SHR,DSN=ISP.SISPTENU                            \n//ISPSLIB  DD DISP=SHR,DSN=ISP.SISPSENU                            \n//ISPMLIB  DD DISP=SHR,DSN=ISP.SISPMENU                            \n//ISPPROF  DD DISP=NEW,UNIT=SYSDA,SPACE=(TRK,(15,15,5)),            \n//         DCB=(RECFM=FB,LRECL=80,BLKSIZE=3120)                     \n//IZUSRVMP DD PATH='&ROOT./defaults/izurf.tsoservlet.mapping.json'  \n//SYSOUT   DD SYSOUT=H                                              \n//CEEDUMP  DD SYSOUT=H                                              \n//SYSUDUMP DD SYSOUT=H                                              \n//                                                                 \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" You might need to change paths and data sets names to match your installation.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Check your system console log for related error messages and respond to them.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, the explorer server communicates with the z/OSMF server on the localhost address. If your z/OSMF server is on a different IP address to the explorer server, for example, if you are running z/OSMF with Dynamic Virtual IP Addressing (DVIPA), you can change this by adding a "),t("code",[this._v("ZOSMF_HOST")]),this._v(" parameter to the "),t("code",[this._v("server.env")]),this._v(" file. For example: "),t("code",[this._v("ZOSMF_HOST=winmvs27")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"troubleshooting-installing-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-installing-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting installing Zowe CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"npm-install-gcommand-fails-due-to-an-eperm-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-gcommand-fails-due-to-an-eperm-error","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("npm install -g")]),this._v("Command Fails Due to an EPERM Error")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Valid on Windows")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Symptom:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Solution:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Issue the "),t("code",[this._v("npm cache clean")]),this._v(" command.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("code",[this._v("Add the --no-optional")]),this._v(" flag to the end of the "),t("code",[this._v("npm install")]),this._v(" command.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sudo-syntax-required-to-complete-some-installations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sudo-syntax-required-to-complete-some-installations","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("Sudo")]),this._v(" syntax required to complete some installations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Valid on Linux")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Symptom:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Solution:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Depending on how you configured Node.js on Linux or Mac, you might need\nto add the prefix "),t("code",[this._v("sudo")]),this._v("before the "),t("code",[this._v("npm install -g")]),this._v(" command or the "),t("code",[this._v("npm uninstall -g")]),this._v(" command. This step gives Node.js write access to the\ninstallation directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"npm-install-g-command-fails-due-to-npm-err-cannot-read-property-pause-of-undefined-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-g-command-fails-due-to-npm-err-cannot-read-property-pause-of-undefined-error","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("npm install -g")]),this._v(" command fails due to "),t("code",[this._v("npm ERR! Cannot read property 'pause' of undefined")]),this._v(" error")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Valid on Windows or Linux")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Symptom:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You receive the error message "),t("code",[this._v("npm ERR! Cannot read property 'pause' of undefined")]),this._v(" when you attempt to install the product.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Solution:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install npm@5.3.0 -g\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"node-js-commands-do-not-respond-as-expected"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-commands-do-not-respond-as-expected","aria-hidden":"true"}},[this._v("#")]),this._v(" Node.js commands do not respond as expected")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Valid on Windows or Linux")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Symptom:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Solution:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There might be a program that is named "),t("em",[this._v("node")]),this._v(" on your path. The Node.js installer automatically adds a program that is named "),t("em",[this._v("node")]),this._v(" to your path. When there are pre-existing programs that are named "),t("em",[this._v("node")]),this._v(" on your computer, the program that appears first in the path is used. To correct this behavior, change the order of the programs in the path so that Node.js appears first.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"installation-fails-on-oracle-linux-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-fails-on-oracle-linux-6","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation fails on Oracle Linux 6")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Valid on Oracle Linux 6")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Symptom:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Solution:")])])}],!1,null,null,null);t.default=n.exports}}]);