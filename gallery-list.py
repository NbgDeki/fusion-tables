import sys
from os import listdir
from os.path import isfile, isdir, join

def create_image (file_name):
  return '<img data-is-thumbnail="true" src="https://ministudio.rs/download/fusion-tables/small/{}" />\n'.format(file_name)

try:
  path = sys.argv[1]
except IndexError:
  print("Path argument is required.")
  quit()

if not isdir(path):
  print("No such directory.")
  quit()

file_names = [f for f in listdir(path) if isfile(join(path, f))]

try:
  output_name = sys.argv[2]
except IndexError:
  output_name = "output.html"

with open(output_name, "w") as file_handler:
  for file_name in file_names:
    line = create_image(file_name)
    file_handler.write(line)
  
  file_handler.close()

print("All done!")