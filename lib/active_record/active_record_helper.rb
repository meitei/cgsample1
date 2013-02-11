module ActiveRecordHelper
  def flatten_conditions(conditions, op = "and")
    return nil if conditions.empty?
    ps = []
    condition = conditions.collect do |c|
      next if c.size < 1
      ps += c[1..(c.size)]
      "( #{c[0]} )"
    end.delete_if { |c| c.blank? }.join(" #{op} ")
    [condition, ps].flatten unless condition.empty?
  end
end