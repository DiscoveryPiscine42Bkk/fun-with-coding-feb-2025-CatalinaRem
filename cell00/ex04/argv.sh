for i in {1..3}; do
  arg=${(P)i}
  [[ -n $arg ]] && echo "$arg"
done
