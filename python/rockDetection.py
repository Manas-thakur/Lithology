import sys
import json
a = int(sys.argv[1])
b = int(sys.argv[2])

c = a / b

# res = [a,c]
res = {'a' : a , 'b' : b, 'h' : "terriii"}

print(json.dumps(res))

sys.stdout.flush()