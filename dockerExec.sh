
usage () {
    echo "Usage: $0 -p PORT -n NAME"
    exit
}

echo_err_help () {
    echo "$1" >&2
    usage
    exit 1
}

options="ha:p:n:"
while getopts $options OPTION; do
    case $OPTION in
        p)
            PORT=$OPTARG
            ;;
        n)
            NAME=$OPTARG
            ;;
        h)
            usage
            ;;
        \?)
            echo_err_help "Unknown option: -$OPTARG"
            ;;
        :)
            echo_err_help "Missing option argument for -$OPTARG"
            ;;
        *)
            echo_err_help "Unimplemented option: -$OPTARG"
            ;;
    esac
done

shift $((OPTIND - 1))

PORT="${PORT:-3001}"
NAME="${NAME:-1}"

echo "Running app inside docker with arguments:
  PORT: $PORT
  NAME: $NAME
"

docker run -t --rm --name blockchain_$NAME -v /$(pwd):/blockchain-demo -p $PORT:$PORT blockchain-demo