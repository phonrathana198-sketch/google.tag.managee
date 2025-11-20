jobs:

  build: main

    runs-on: ubuntu-latest
  strategy:
      matrix:
        go: [ '1.14', '1.13' ]
    name: Go ${{ matrix.go }} sample
    steps:
      - uses: actions/checkout@v5
      - name: Setup go
        uses: actions/setup-go@v6
        with:
          go-version: ${{ matrix.go }}
      - run: go run hello.go
          uses: actions/setup-go@v6
  with:
       token: ${{ secrets.GH_DOTCOM_TOKEN }}
          go-version: '1.18'
  steps:
       - uses: actions/checkout@v5
       - uses: actions/setup-go@v6
    with:
         go-version-file: '.tool-versions'
       - run: go version
   steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-go@v6
   with:
      - run: go run hello.go
        go-version: '1.17'
        check-latest: true
        cache-dependency-path: |
             subdir/go.sum
             tools/go.sum
      # cache-dependency-path: "**/*.sum"
   
       
