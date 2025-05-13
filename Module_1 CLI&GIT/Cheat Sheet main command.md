# Common Windows CMD Commands

| **Command**    | **Example Usage**                     | **Explanation**                                  |
| -------------- | ------------------------------------- | ------------------------------------------------ |
| `dir`          | `dir C:\Users`                        | List all files and folders in `C:\Users`         |
| `cd`           | `cd C:\Windows\System32`              | Change directory to `C:\Windows\System32`        |
| `copy`         | `copy C:\file.txt D:\backup\file.txt` | Copy `file.txt` from `C:` to `D:\backup\`        |
| `move`         | `move C:\file.txt D:\moved_file.txt`  | Move (rename) `file.txt` to `D:\moved_file.txt`  |
| `del`          | `del C:\Users\John\temp.txt`          | Delete the file `temp.txt`                       |
| `mkdir` / `md` | `mkdir C:\NewFolder`                  | Create a new folder `C:\NewFolder`               |
| `rmdir` / `rd` | `rmdir C:\OldFolder`                  | Remove the folder `C:\OldFolder` (empty folders) |
| `type`         | `type C:\Users\John\notes.txt`        | Display the contents of `notes.txt` in console   |
| `cls`          | `cls`                                 | Clear the CMD screen                             |
| `echo`         | `echo Hello World!`                   | Print "Hello World!" to the screen               |
| `tasklist`     | `tasklist`                            | Show all running processes                       |
| `taskkill`     | `taskkill /IM notepad.exe /F`         | Force close `notepad.exe`                        |
| `ipconfig`     | `ipconfig /all`                       | Show detailed network configuration              |
| `ping`         | `ping google.com`                     | Ping `google.com` and display network response   |
| `netstat`      | `netstat -an`                         | Show all active network connections and ports    |
| `chkdsk`       | `chkdsk C: /f`                        | Check and fix disk errors on `C:` drive          |
| `sfc /scannow` | `sfc /scannow`                        | Scan and repair system files                     |
| `shutdown`     | `shutdown /s /t 60`                   | Shutdown the system in 60 seconds                |
| `systeminfo`   | `systeminfo`                          | Display detailed system information              |

---

# Common Linux/macOS (Bash) CLI Commands

| **Command**     | **Example Usage**                                  | **Explanation**                                   |
| --------------- | -------------------------------------------------- | ------------------------------------------------- |
| `ls`            | `ls -l /home/user`                                 | List contents of `/home/user` in long format      |
| `cd`            | `cd /var/log`                                      | Change directory to `/var/log`                    |
| `pwd`           | `pwd`                                              | Print the current directory path                  |
| `cp`            | `cp file.txt /backup/file.txt`                     | Copy `file.txt` to `/backup/`                     |
| `mv`            | `mv old.txt new.txt`                               | Rename `old.txt` to `new.txt`                     |
| `rm`            | `rm old.txt`                                       | Remove `old.txt`                                  |
| `mkdir`         | `mkdir new_folder`                                 | Create a new directory called `new_folder`        |
| `rmdir`         | `rmdir empty_folder`                               | Remove empty directory `empty_folder`             |
| `touch`         | `touch newfile.txt`                                | Create an empty file `newfile.txt`                |
| `nano` / `vim`  | `nano notes.txt` / `vim notes.txt`                 | Open `notes.txt` in nano or vim editor            |
| `cat`           | `cat file.txt`                                     | Display contents of `file.txt`                    |
| `less` / `more` | `less longfile.txt`                                | View `longfile.txt` one page at a time            |
| `grep`          | `grep "error" logfile.txt`                         | Find "error" in `logfile.txt`                     |
| `find`          | `find / -name "myfile.txt"`                        | Find `myfile.txt` starting from root `/`          |
| `chmod`         | `chmod 755 script.sh`                              | Set permissions to `rwxr-xr-x` on `script.sh`     |
| `chown`         | `chown user:group file.txt`                        | Change owner of `file.txt` to `user:group`        |
| `echo`          | `echo "Hello, world!"`                             | Print `Hello, world!` to terminal                 |
| `man`           | `man ls`                                           | Display manual for `ls` command                   |
| `top` / `htop`  | `top` / `htop`                                     | Show running processes (htop if installed)        |
| `ps`            | `ps aux`                                           | Show all running processes                        |
| `kill`          | `kill 1234`                                        | Kill process with PID `1234`                      |
| `df`            | `df -h`                                            | Show disk usage in human-readable format          |
| `du`            | `du -sh /var/log`                                  | Show size of `/var/log` directory                 |
| `tar`           | `tar -czvf archive.tar.gz folder/`                 | Compress `folder/` into `archive.tar.gz`          |
| `wget` / `curl` | `wget http://example.com/file.txt` / `curl -O URL` | Download file from URL                            |
| `ssh`           | `ssh user@192.168.1.100`                           | Connect to server at IP `192.168.1.100` as `user` |
| `sudo`          | `sudo apt update`                                  | Run `apt update` as superuser                     |
| `history`       | `history`                                          | Display previously run commands                   |

### Note

---

- Some commands like `sudo, chown, chmod, kill` may require superuser privileges.

- `htop` is not installed by default on all systems (alternative to `top`).

- `wget` and `curl` both download files, but with slightly different syntax.

- `man` provides helpful documentation for nearly every command!
