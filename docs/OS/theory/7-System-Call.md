# System Call
 they provide an interface to the services made avaible by an operating system. 

 # User Mode
 if a program is executing in User Mode it do not have direct access to the memory and the resources of the computer system.
 # kernal Mode (privileged mode)
 if a program is executing in Kernal mode then it has direct access to the memory and the resources of the computer system.


if kernal mode program crashed then entire o/s can crash. but some times program do need to run in kernel mode to access all the memory and resources from the computer system. so the o/s switches the execution of program from the kernal mode to the user mode this is known as context switching. and when it goes back from kernal to user mode this is also know as Context switching.

for example we need to copy a file from destination to another destination.  
here from getting the input file name to copying the content of it. eveything is done through a system call.

# types of system call.
 1. Process Control
 2. File Manuplation
 3. Device Managment
 4. Information Managment
 5. Communications

# Process Control
- end ,abord
- load, execute
- create process , terminate process
- get process attribute , terminate process 
- wait for time
- wait event, signal event 

their are various processes running in a system and they need to be controled. they have to terminate  either normally or abnormally.the process must come to a end when it's execution is complete. so if an error occurs the process must comes to an end. 

# file Manipulation
- create file, delete file
- open, close
- read,write, reposition
- get file attributes, set file attributes

# Device Manuplation
- request Device , Release Device
- read, write and reposition
- get device attribute , set device attribute
- logically attach or detach attribute.
(logically attaching means the operating system understands that the device have been attached and is ready to use)
(logically detaching means the device is ready to remove from the hardware)
# Information Maintenance
- get time or date , set time or date
- get system data , set system data
- get process , file, device attribute
- set process , file or device attribute
# communication
- create, delete communication system
- send , receive message 
- tansfer status information
- attach or detach remote devices

