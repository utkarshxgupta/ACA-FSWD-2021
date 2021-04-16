# Assignment 1.0

## **Basic CMD Commands**

1. **CD** - Change Directory.  
   * Allows to move from one directory to another. 
   * To change drive, Directly write D: to switch from C to D Drive.

2. **MD** - Make Directory.
    * Allows to create a folder.

3. **DIR** - Directory
    * View contents of a directory.

4. **REN** - Rename
    * Allows to rename the Files and Folders.

5. **COPY** - Allows to copy files from one directory to another.

6. **XCOPY** - Allows to copy folders from one location to another.
     * We use /s and /i with it to ensure all subfolders are copied as well as folders are created in the destination location if they dont already exist.

7. **DEL** - Delete
    * Allows to delete files in a directory.

8. **RD** - Remove Directory
    * Allows to delete folders.

9. **HELP** - To get the list of Commands.

![cmd](https://mir-s3-cdn-cf.behance.net/project_modules/fs/3f663984741745.5d668da7285e9.gif)

## **Some Terms related to Web Development**

### **Client Side**

In web development, 'client side' refers to everything in a web application that is displayed or takes place on the client (end user device). This includes what the user sees, such as text, images, and the rest of the UI, along with any actions that an application performs within the user's browser.

![Server side client side](https://www.cloudflare.com/img/learning/serverless/glossary/client-side-vs-server-side/many-to-many-client-server-relationship.svg)

### **Server Side**

Much like with client side, 'server side' means everything that happens on the server, instead of on the client. In the past, nearly all business logic ran on the server side, and this included rendering dynamic webpages, interacting with databases, identity authentication, and push notifications.

![Server side client side](https://lh3.googleusercontent.com/-u4JyIsBCu-4/Wq4GFvBcjKI/AAAAAAAAD1A/QZGWNRRCIF8LaEk78LMFMtAJSX3PH8SiQCL0BGAYYCw/h628/2018-03-17.png)

### **HTTP**
*Hypertext Transfer Protocol (HTTP)* is an [application-layer](https://en.wikipedia.org/wiki/Application_Layer) protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical [client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), with a client opening a connection to make a request, then waiting until it receives a response.

### **HTTP vs HTTPS**

We already know what HTTP is. So now the question is -
#### **What is HTTPS**?
HTTPS stands for *Hypertext Transfer Protocol Secure*. The problem with the regular HTTP protocol is that the information that flows from server to browser is not encrypted, which means it can be easily stolen. HTTPS protocols remedy this by using an SSL (secure sockets layer) certificate, which helps create a secure encrypted connection between the server and the browser, thereby protecting potentially sensitive information from being stolen as it is transferred between the server and the browser.

![http vs https](https://comodosslstore.com/blog/wp-content/uploads/2017/04/http-vs-https.jpg)

### **Frameworks vs Libraries**

* **Library -** A library provides a set of helper functions/objects/modules which your application code calls for specific functionality. Libraries typically focus on a narrow scope (e.g., strings, IO, sockets), so their API’s also tend to be smaller and require fewer dependencies. It is just a collection of class definitions. Why we need them? The reason being very simple i.e. code reuse, use the code which has already been written by other developers.
* **Framework -** Framework, on the other hand has defined open or unimplemented functions or objects which the user writes to create a custom application. Because a framework is itself an application, it has a wider scope and includes almost everything necessary to make a user application as per his own needs.

>Thus, the key difference is in the **“Inversion of Control”**, commonly called as IoC. When we call a method from a library, we are in control. But in framework, the control is inverted i.e. the framework calls us. It defines a skeleton where the application defines its own features to fill out the skeleton.

![framework vs libraries](https://i.ytimg.com/vi/V961cMZKB5M/maxresdefault.jpg)