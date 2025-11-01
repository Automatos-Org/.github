module.exports = {
  preset: "angular",
  types: [
    { type: "feat", section: "✨ Features" },
    { type: "fix", section: "🐛 Bug Fixes" },
    { type: "docs", section: "📝 Documentation", hidden: false },
    { type: "style", section: "💅 Styles", hidden: false },
    { type: "refactor", section: "♻️ Refactors", hidden: false },
    { type: "perf", section: "⚡ Performance", hidden: false },
    { type: "test", section: "🧪 Tests", hidden: false },
    { type: "chore", section: "🧹 Chores", hidden: false },
  ],
  releaseCommitMessageFormat: "chore(release): {{currentTag}} [skip ci]",
};
