productsProcess:
	node ./utils/productsProcess.js 

uploadSandbox:
	aws s3 sync ./dist s3://amzfunstuff --acl public-read --delete