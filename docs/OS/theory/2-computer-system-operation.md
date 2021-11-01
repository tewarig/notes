# Basic of Operation System
A modern computer system contains more than one CPU's and a number of device controllers. conneted through a  common bus that provide access to shared memory. 
<a href="https://ibb.co/QpgS4yw"><img src="https://i.ibb.co/vVFyS0n/Screenshot-2021-11-01-at-12-56-14-PM.png" alt="Screenshot-2021-11-01-at-12-56-14-PM" border="0" /></a>
here cpu is conneted to a single bus which manges every thing.

- when ever some thing have to be loaded it have to be loaded in the main memory . 
- all these device controller can execute at the same time.
- to ensure a ordely access to the shared memory , a memory controller is provided whose function is to synchronise the access to the memory.


# Important Defination
- BootStrap Program
 the inital program that runs when a computer is powerup or rebooted 
 it is stored in the rom of the computer
 it must know how to load the os and start executing that system. 
 it must load and located into the memory of the kernal.
- Interrupt (when we are interrupted)
 when cpu is doing some work the hardware or software will interrupt you. so the cpu will stop  what it is doing and start excuting the task .
 Hardware may triggre and interuppt any time by sending a signal to the cpu , usally by the way of system bus. 
- System Call 
 software triggers an Interrupt by executing a special operation called system call. 


When an interrupt is triggred the cpu stops whatever it was doing and immediately transfers exection to a fixed location.
   - fixed location
   it usally contains the starting address of the service routing where the Interrupt is located.
 the interrupt gets executed 
 on completion the cpu resumes and the interrupt completion.