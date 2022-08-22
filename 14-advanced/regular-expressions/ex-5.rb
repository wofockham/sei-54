# 5. [8] Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.

# (Sunday|Sunday): Alternatives
# (.): Capturing: \1
ARGF.each do |line|
    puts line if line =~ /(.)\1/
end