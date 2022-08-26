words = %w( I AM THAT I AM )
words = ARGV unless ARGV.empty?

puts "-=" * 40
puts words.join(' ').center 80
puts "=-" * 40

words.permutation.to_a.shuffle.each do |line|
    puts line.join(' ').center 80
end
