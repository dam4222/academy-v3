# Current System Architecture

![Current System Architecture](http://cdn1.academy-ny.com/wp-content/uploads/2018/05/12013625/High-Level-Architecture.png)





## Table of Contents

- Install and configure WordPress
	* [Install WordPress on ec2 instance](#setup)
	* [Install a few plugins](#plugin-installation)
- Install and configure Next App
	* [Install Node on ec2](#install-node-on-ec2)
	* [Clone/Pull App from git](#clone-app)
	* [Build and Run](#build-and-run)
- Configure Apache server
	* [Domain configuration](#domain-configuration)
	* [Generate and configure SSL certificate](#generate-and-configure-ssl-certificate)
	* [Create Virtual Host](#create-virtual-host)
	* [Proxy Node via Apache](#proxy-node-via-apache)
- Troubleshoot [OOPS]
	1. [System can't find Apache modules - a2enmod ?](#system-cant-find-apache-modules---a2enmod-)
	2. [Fetch URL is changed in `env-config.js` but isn't updated in the app](#fetch-url-is-changed-in-env-configjs-but-isnt-updated-in-the-app)
	3. [Domain name conflicts while registering for let's encrypts' certificates](#domain-name-conflicts-while-registering-for-lets-encrypts-certificates)
	4. [How do I connect to my ec2 instance ?](#how-do-i-connect-to-my-ec2-instance-)


## Setup

###### Inspired from a tutorial on AWS - [here](https://aws.amazon.com/getting-started/tutorials/launch-a-wordpress-website/)
OR
Follow these steps to host a WordPress installation

1. [Open the AWS Management Console](https://console.aws.amazon.com/console/home?region=us-east-1#)

2. Then find **EC2** under **Compute** under **Services**
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launchavm/awsconsole-ec2.56ac379d144e677fcc0ddd6742c55564c33af7f2.png)

3. Click **Launch Instance** from the dashboard to create and configure your virtual machine.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launchavm/launch-instance.ba8451e3d22e7e6c9d86d1c05443c7d861faf24a.png)

4. **Configure** your Instance
	1. Click on **AWS Marketplace** on the left-hand side, search for **WordPress**, look for WordPress powered by **BitNami**, then click Select.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launch-a-wordpress-website/Launch%20a%20WordPress%20Website%20-%20AMI.8dcfa97e04c6daaf3b1681f1e509419e9cdce962.png)
	
	2. You will be presented a detailed pricing page. In this case, the price will be $0.00 for the software regardless of the size of the instance that you use. Scroll to the bottom and click Continue.
	
	3. we will be using a free-tier eligible **t2.micro** instance. Click on t2.micro in the Type column (it should be the first one), then click **Next: Configure Instance Details**. It may take a few seconds to load. On the following screens, click Next: Add Storage and then Next: Tag Instance.
	![Shown here](https://d1.awsstatic.com/Getting%20Started/Getting%20Started%20-%20Choose%20an%20instance%20-%20WordPress.9d737b75cee928529ebef8197293d6976dbae3cf.png)
	
	4. Click **Review and Launch** to continue.
	
	5. You can review your instance configurations, then click **Launch** when you’re ready to start your Amazon EC2 instance running WordPress.
	
	6. The next screen deals with key-pairs. Key-pairs are how you can connect to your EC2 instances via a terminal program using Secure Shell (SSH). Select Proceed with **Create a key pair**, give a name to the Key, then **Download Key Pair**.
		> This is the key which we're gonna use later on to connect via SSH, so save it or maybe have a secure copy somewhere.
	![Shown here](https://rancher.com/docs/one-point-x/img/os/Rancher_aws3.png)
	
	7. Click **Launch Instances** to launch your instance. Be aware that starting the instance up may take a few minutes.
	
	8. Click View Instances on the bottom right of the page (you may need to scroll down to see it). Then select the WordPress instance, make sure the Instance State says running. If Instance State says launching then AWS is still preparing your WordPress instance.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launch-a-wordpress-website/Launch%20a%20WordPress%20Website%20-%20Instance%20Running.08b5c01e053a3bd40472a42ef3e81c4114c76c7f.png)
	
	9. Once your instance is running, you can now test your WordPress website. Find the **Public IP** for your instance at the bottom of this page.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launch-a-wordpress-website/Launch%20a%20WordPress%20Website%20-%20Public%20IP.60f367ead27257f83c3438836ff5a2198c6cb252.png)
	
	10. Copy the Public IP into a new tab in your web browser, and you should see a **Hello World** blog page appear.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launch-a-wordpress-website/Launch%20a%20WordPress%20Website%20-%20Hello%20World.b37fd52d3989f063d94ac0aa613ad70bf9a86656.png)
	
5. Make Changes to Your Website 

	> Now that you have your WordPress site up and running, it’s time to log into its administration page so you can customize your site. To find your password, please follow the steps below:

	1. Switch back to your EC2 management console in your web browser. Select **WordPress** instance, and click the **Actions** button. In the drop down menu, select **Instance Setting**, and choose **Get System Log**.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launch-a-wordpress-website/Launch%20a%20WordPress%20Website%20-%20System%20Log.1842ebdc9c91c6e4594d709fa10ff4d66036e3e2.png)
	
	2. In the system log window, scroll through to the bottom to find the password that's surrounded by hash marks.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launch-a-wordpress-website/Launch%20a%20WordPress%20Website%20-%20Password.09b1827978db35368f5fa3ecbb8e1d233b2fa205.png)
	
	3. Now that you have your password, switch back to the tab that you used to access the WordPress **Hello World** page. Add **/admin** to the end of the URL so it looks something like **54.192.32.144/admin**. Hit enter. Enter the Username **user** and the **Password** that you read from the log file.
	![Shown here](https://d1.awsstatic.com/Digital%20Marketing/House/other/launch-a-wordpress-website/Launch%20a%20WordPress%20Website%20-%20Login.c5abc6de858e49e17aed5459d90a368b17b5c562.png)
			
	> Congratulations! You now have your WordPress site up and running. You can now manage, customize, and configure it as you like.



## Plugin Installation

> Since, we're using WordPress as our backend to serve our custom data, we'll need these plugins:

1. **Install and activate** these:
	1. [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)  By WebDevStudios
		* Used to create custom types like `blogs` or `projects`

	2. [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) By Elliot Condon
		* Used to create fields like `blog title` , `blog description` etc for the custom post type created

	3. [ACF to REST API](https://wordpress.org/plugins/acf-to-rest-api/) By Aires Gonçalves
		* Used to serve the data created via REST API

	4. [WP Offload S3 Lite](https://wordpress.org/plugins/amazon-s3-and-cloudfront/) By Delicious Brains
		* Used to save multimedia files over to AWS' S3


2. Plugin **Setup and usage**:
	1. **Custom Post Type UI**
		1. Go to CPT UI>Add/Edit Post Types
		2. For the Post Type Slug, enter `blogs`  — this is the URL slug WordPress will use.
		3. For the Plural Label, enter `Blogs`
		4. For the Singular Label, enter `Blog`
		5. **IMPORTANT:** Scroll down to the Settings area and find the “Show in REST API” option. By default, this is set to False. If you don’t change it to True, you will not be able to query this CPT using the WP-API. Right underneath that option, you should see the “REST API base slug” option — you can enter blogs here.
		6. Scroll all the way down and click **Add Post Type**.
		> You should see a new Blogs option appear in the sidebar:
		![Shown here](http://cdn1.academy-ny.com/wp-content/uploads/2018/05/12013659/CPT-UI.png)
		7. Similarly add `Projects` Post type
		
	2. **Advanced Custom Fields**
		1. Go to Custom Fields>Field Groups
		2. Click **Add New**
		3. For the Field Group title, enter something like `Blog Data`
		4. Scroll down until you see the Location metabox. Set this Field Group to only show if Post Type is equal to Blog:![Shown here](http://cdn1.academy-ny.com/wp-content/uploads/2018/05/12013718/Custom-Field.png)
		5. Similarly Create `Projects` field group with appropriate data structure
		
	3. **ACF to REST API**
		- Now that we have our Custom Fields, we need to expose them to the WP-API. ACF doesn’t currently ship with WP-API support, but there’s a great plugin solution from the community called ACF to REST API. All you have to do is install (you can find it by searching for it at Plugins>Add New) and activate it, and it will immediately expose your ACF custom fields to the API.
		
	4. **WP Offload S3 Lite**
		- Follow the guide [here](https://deliciousbrains.com/wp-offload-s3/doc/quick-start-guide/) to setup



## Install Node on ec2

> Inspired from - [here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

1. Connect to your Linux instance as ec2-user using SSH.

2. Install the current version of node version manager (nvm) by typing the following at the command line to install version 33.8.
	```bash
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
	```

3. Activate nvm by typing the following at the command line.
	```bash
	. ~/.nvm/nvm.sh
	```

4. To install the latest LTS (long-term-support) release of Node.js, type the following at the command line.
	```bash
	nvm install --lts
	```
	Installing Node.js also installs the Node Package Manager (npm) so you can install additional modules as needed.
	
5. Test that Node.js is installed and running correctly by typing the following at the command line.
	```bash
	node -e "console.log('Running Node.js ' + process.version)"
	```
	This should display the following message that confirms the installed version of Node.js running.


## Clone App

Clone the app to user directory
	```git
	cd 
	```

1. Assuming we have the NextApp ready to clone
	```git
	git clone https://github.com/dam4222/academy-v3.git
	```
2. Go into the `academyv3` folder
	```
	cd academyv3
	```
3. Install the packages required by our App
	```bash
	npm install
	```
	Wait for the packages to finish download
	
4. **OPTIONAL**
	- If the `Fetch URL` was changed in `env-config.js`
	- Delete the folder /node_modules/.cache/babel_loader
		`rm -rf node_modules/.cache/babel_loader`
		
		
## Build and Run

1. Build App
	```bash
	npm run build
	```
2. Install PM2
	- Why?
		* To run the app as service, so that the app wont stop running after a certain amount of time
	- Install
	```bash
	npm install pm2 -g
	```
3. Run the app
	```bash
	pm2 start npm --name "next" -- start
	```


# Configuring Apache


## Domain configuration

###### Assumptions:
- You have deployed a WordPress application and the application is available at a public IP address, done [here](#setup).
- You have the necessary credentials to log in to the Bitnami application instance, done [here](#setup).
- You own a domain name `academy-ny.com`.

###### Now:
1. Login to your Domain name provider 
2. Forward your domain name, `academy-ny.com` , to the public IP of the ec2 instance, created [here](#setup)
3. Create a subdomain name (usually an `A record`), `admin.academy-ny.com`, to the public IP of the ec2 instance.
	
###### Note:
- Here `admin` is the name for sub-domain to access the WordPress backend
- `academy-ny.com` would be landing page of the NextJS App


## Update WordPress home URLS

- Open the `wp-config.php` using
	```bash
	cd
	vi /apps/wordpress/htdocs/wp-config.php
	```
- Update the `WP_SITEURL` and `WP_SITEURL` to reflect the newly created subdomain -> `admin.academy-ny.com`
	```php
	define('WP_SITEURL', 'http://admin.academy-ny.com/');
	define('WP_HOME', 'http://admin.academy-ny.com/');
	```


## Generate and configure SSL certificate

> Inspired from [here](https://docs.bitnami.com/huawei/how-to/generate-install-lets-encrypt-ssl/#introduction)

> We'll need to create two certificates for:
- **WordPress**, assuming is routed at `admin.academy-ny.com`
- **NextApp**, assumong is routed at `academy-ny.com`

1. Install The Lego Client
	- *The Lego client simplifies the process of Let's Encrypt certificate generate. To use it, follow these steps:*
	- Connect to the ec2 instance.
	- Run the following commands to install the Lego client:
	```bash
	cd /tmp
	curl -s https://api.github.com/repos/xenolf/lego/releases/latest | grep browser_download_url | grep linux_amd64 | cut -d '"' -f 4 | wget -i -
	tar xf lego_linux_amd64.tar.xz
	sudo mv lego_linux_amd64 /usr/local/bin/lego
	```
	- These steps will download, extract and copy the Lego client to a directory in your path. 

2. Generate Let's Encrypt Certificate For Your Domain
	- Turn off all Bitnami services:
	```bash
	sudo /opt/bitnami/ctlscript.sh stop
	```
	- Request **two new certificates** for your domains as below. Remember to replace the **EMAIL-ADDRESS** placeholder with your email address.

	- Run these commands, assuming generating certificates for ```admin.academy-ny.com``` and ```acadeny-ny.com```
	```bash
	sudo lego --email="EMAIL-ADDRESS" --domains="admin.academy-ny.com" --path="/etc/lego" run
	```
	- *After the client is done generating certificate for the domain above*
	```bash
	sudo lego --email="EMAIL-ADDRESS" --domains="academy-ny.com" --path="/etc/lego" run
	```
	- Two set of certificates will now be generated in the /etc/lego/certificates directory. This set includes the server certificate file DOMAIN.crt and the server certificate key file DOMAIN.key.


3. Configure The Web Server To Use The Let's Encrypt Certificate
	- Assuming certificates were generated for ```admin.academy-ny.com``` and ```acadeny-ny.com``` 
	- Link the new SSL certificate and certificate key file to the correct locations, depending on which Web server you're using. Update the file permissions to make them readable by the root user only. 
	```bash
	sudo mv /opt/bitnami/apache2/conf/server.crt /opt/bitnami/apache2/conf/server.crt.old
	sudo mv /opt/bitnami/apache2/conf/server.key /opt/bitnami/apache2/conf/server.key.old
	sudo mv /opt/bitnami/apache2/conf/server.csr /opt/bitnami/apache2/conf/server.csr.old
	sudo mv /opt/bitnami/apache2/conf/admin.server.crt /opt/bitnami/apache2/conf/server.crt.old
	sudo mv /opt/bitnami/apache2/conf/admin.server.key /opt/bitnami/apache2/conf/server.key.old
	sudo mv /opt/bitnami/apache2/conf/admin.server.csr /opt/bitnami/apache2/conf/server.csr.old
	sudo ln -s /etc/lego/certificates/academy-ny.com.key /opt/bitnami/apache2/conf/server.key
	sudo ln -s /etc/lego/certificates/academy-ny.com.crt /opt/bitnami/apache2/conf/server.crt
	sudo ln -s /etc/lego/certificates/admin.academy-ny.com.key /opt/bitnami/apache2/conf/admin.server.key
	sudo ln -s /etc/lego/certificates/admin.academy-ny.com.crt /opt/bitnami/apache2/conf/admin.server.crt
	sudo chown root:root /opt/bitnami/apache2/conf/server*
	sudo chmod 600 /opt/bitnami/apache2/conf/server*
	```
	- Restart all Bitnami services:
	`sudo /opt/bitnami/ctlscript.sh start`


## Renew The Let's Encrypt Certificate

> Let's Encrypt certificates are only valid for 90 days. 
> To automatically renew your certificates before they expire, write a script to perform the above tasks and schedule a cron job to run the script periodically. To do this:
- Create a script at /etc/lego/renew-certificate.sh with the following content. Remember to replace the **EMAIL-ADDRESS** placeholder with your email address.
	```bash
	#!/bin/bash
	sudo /opt/bitnami/ctlscript.sh stop apache
	sudo /usr/local/bin/lego --email="EMAIL-ADDRESS" --domains="admin.academy-ny.com" --path="/etc/lego" renew
	sudo /usr/local/bin/lego --email="EMAIL-ADDRESS" --domains="academy-ny.com" --path="/etc/lego" renew
	sudo /opt/bitnami/ctlscript.sh start apache
	```
- Make the script executable:
	```bash
	chmod +x /etc/lego/renew-certificate.sh
	```
- Execute the following command to open the crontab editor:
	```bash
	sudo crontab -e
	```

- Add the following lines to the crontab file and save it:
	```bash
	0 0 1 * * /etc/lego/renew-certificate.sh 2> /dev/null
	```


## Create Virtual Host

> Inspired from [here](https://docs.bitnami.com/aws/components/apache/#how-to-create-a-virtual-host)

Using a Virtual Host allows you to access an application at (for example) `http://SERVER-IP/` or `http://APPNAME.SERVER-IP` instead of `http://SERVER-IP/APPNAME`

1. Comment out the line that includes the prefix configuration file in the `/opt/bitnami/apache2/conf/bitnami/bitnami-apps-prefix.conf` file:
	```php
	# Include "/opt/bitnami/apps/wordpress/conf/httpd-prefix.conf"
	```	
2. Include the virtual host configuration file for WordPress in the /opt/bitnami/apache2/conf/bitnami/bitnami-apps-vhosts.conf file:
	```php
	Include "/opt/bitnami/apps/wordpress/conf/httpd-vhosts.conf"
	```
3. Edit the /opt/bitnami/apps/wordpress/conf/httpd-vhosts.conf file and replace the placeholder domain within the ServerName and ServerAlias directives with the correct domain name.
	- Empty the contents of /opt/bitnami/apps/wordpress/conf/httpd-vhosts.conf
	- Add in these line
	```apache
	<VirtualHost *:80>
	    ServerName admin.academy-ny.com
	    DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"

	    Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
	</VirtualHost>

	<VirtualHost *:443>
	    ServerName admin.academy-ny.com

	    DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"
	    SSLEngine on
	    SSLCertificateFile "/opt/bitnami/apps/wordpress/conf/certs/admin.server.crt"
	    SSLCertificateKeyFile "/opt/bitnami/apps/wordpress/conf/certs/admin.server.key"

	    Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
	</VirtualHost>



	<VirtualHost *:80>
	   ServerName academy-ny.com

	   ProxyRequests Off
	   ProxyPreserveHost On
	   ProxyVia Full
	   <Proxy *>
	      Require all granted
	   </Proxy>

	   <Location />
	      ProxyPass http://127.0.0.1:3000/
	      ProxyPassReverse http://127.0.0.1:3000/
	   </Location>

	    <Directory "/var/www/example.com/html">
	    AllowOverride All
	    </Directory>
	</VirtualHost>

	<VirtualHost *:443>

	   ServerName academy-ny.com
	   ProxyRequests Off
	   ProxyPreserveHost On
	   ProxyVia Full
	   <Proxy *>
	      Require all granted
	   </Proxy>
	    <Location />
	      ProxyPass http://127.0.0.1:3000/
	      ProxyPassReverse http://127.0.0.1:3000/
	   </Location>

	    <Directory "/var/www/example.com/html">
	    AllowOverride All
	    </Directory>
	    SSLEngine on
	    SSLCertificateFile "/opt/bitnami/apps/wordpress/conf/certs/server.crt"
	    SSLCertificateKeyFile "/opt/bitnami/apps/wordpress/conf/certs/server.key"

	    Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
	</VirtualHost>
	```
4. Restart the Apache server:
	```bash
	sudo /opt/bitnami/ctlscript.sh restart apache
	```

## Proxy Node via Apache

- To access the Node.js script from the web, install the Apache modules proxy and proxy_http with the commands:
	```bash
	sudo a2enmod proxy
	sudo a2enmod proxy_http
	```
- Once the installation is complete, restart Apache for the changes to take effect:
	```bash
	sudo /opt/bitnami/ctlscript.sh restart apache
	```
	

## Troubleshoot | FAQs


### System can't find Apache modules - a2enmod ?
- This problem occurs because Bitnami's apache doesnt ship with extra modules
- Since this apache server is installed in bitnami's closed environment, a hacky way is
	```bash
	sudo apt-get install apache2
	```
- Once installation is done, you should be able to enable the modules


### Fetch URL is changed in env-config.js but isn't updated in the app

- Delete the folder under /academyv3/node_modules/.cache/babel_loader 
	```bash
	cd academyv3
	rm -rf node_modules/.cache/babel_loader
	```
- Build or run the app again



### Domain name conflicts while registering for let's encrypts' certificates

- If the record, say `A` record was added just now, wait for a few minutes for DNS to reflect those changes

- This might happen when the values for **`EMAIL`** and **`DOMAIN`** aren't changed appropriately in the following command:
	```bash
	sudo lego --email="EMAIL-ADDRESS" --domains="DOMAIN" --path="/etc/lego" run
	```
- Rather than that it should be *here `username@gmail.com` should be replaced with your email-address*:
	```bash
	sudo lego --email="username@gmail.com" --domains="academy-ny.com" --path="/etc/lego" run
	```


### How do I connect to my ec2 instance ?

- Open a terminal
- SSH into the instance. Replace the `/path/to/your/key/key-pair.pem` with the path to your key-pair. `public-ip` can be found [here](#setup)
	```bash
	ssh -i /path/to/your/key/key-pair.pem ubuntu@public-ip
	```