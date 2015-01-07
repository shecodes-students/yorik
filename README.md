# yorik
interactive unix userland tutorial based on jor1k

# Install

### Install jor1k
    git clone https://github.com/s-macke/jor1k.git
    cd jor1k
    npm link
    cd ..
    
### Install yorik
    git clone https://github.com/shecodes-students/yorik.git
    cd yorik
    npm install
    npm link jor1k
    
# Run 

To open a browser and get a unix prompt in the emulator:
    
    npm run open
    
Now you can hack on both, jor1k and yorik, and only need to reload your browser to see your changes in effect. (in the background, beefy browserifies the code on demand)
    
