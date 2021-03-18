Setting up ethermint:
https://www.youtube.com/watch?v=cH-4Mq-S4BA

clone repository
`git clone https://github.com/ChainSafe/ethermint`

`cd ethermint`

`make install`


# Troubleshooting ethermint
go version should be 1.15+

https://www.jajaldoang.com/post/how-to-update-golang/

if you have problems setting the gopath on mac:
export GOPATH=/Users/$USER/go
https://gist.github.com/molivier/271bba5d67de1583a8e3

ethermintcli or ethermintd can not be found - no such command

if run the above commands or the ./init.sh gives you errors you should check your $PATH varibales
export PATH="$PATH:/Users/$USER/go/bin"
