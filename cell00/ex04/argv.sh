if [[ $# -eq 0 ]]; then
  echo "No arguments supplied"
  exit 1
fi

for i in {1..3}; do
  arg=${(P)i}  # ดึงค่า argument ที่ $i
  [[ -n $arg ]] && echo "$arg"
done
