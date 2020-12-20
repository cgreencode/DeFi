(async () => {
        try {
        const abi_Demo_Call_MoniSwap = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			}
		],
		"name": "query_prices",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "swapID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForTokensInASwap",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts_return",
				"type": "uint256[]"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	}
]
// ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c','0x55d398326f99059fF775485246999027B3197955'] // 5
// ['0x77d57b72d547035b51d1b722796bf23cd46b5186','0xae13d989dac2f0debff460ac112a837c89baa7cd']
// // 0x87c7c0027F5730b2B49ABae0c4F71099E203b5A9
            const contractAddress = '0xcaa3fd790b7478a9d4d7354da49adf651e80f793'
            // let contract = new web3.eth.Contract(hello_abi, contractAddress)
            let contract = new web3.eth.Contract(abi_Demo_Call_MoniSwap,contractAddress)
            //let name = await contract.methods.test_getAmountsOut(500,['0x77d57b72d547035b51d1b722796bf23cd46b5186','0xae13d989dac2f0debff460ac112a837c89baa7cd']).call()
            // let name =  await contract.methods.query_prices(500,['0x77d57b72d547035b51d1b722796bf23cd46b5186','0xae13d989dac2f0debff460ac112a837c89baa7cd']).call()
            // let name = await contract.methods.test_set_z(100).send({from:'0x344F14b0Ea7a1CFfd17D7887E007D482BB4320a5'})
            //console.log(name)

            let swap = await contract.methods.swapExactTokensForTokensInASwap(4,12,3,['0xae13d989dac2f0debff460ac112a837c89baa7cd','0x77d57b72d547035b51d1b722796bf23cd46b5186'],'0x87c7c0027F5730b2B49ABae0c4F71099E203b5A9',100000000000).send({from:'0x344F14b0Ea7a1CFfd17D7887E007D482BB4320a5'})
            console.log(swap)

        } catch (e) {
            console.log(e.message)
        }

      })()